<?php
if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		} );
	return;
}
/*
    Helpful Links
    https://github.com/jarednova/timber/wiki
    https://github.com/jarednova/timber/wiki/ACF-Cookbook
    http://twig.sensiolabs.org/documentation
*/
add_filter('upload_mimes', 'custom_upload_mimes');
add_action( 'init', 'register_taxonomies' );
function custom_upload_mimes ( $existing_mimes=array() ) {
	// add the file extension to the array
	$existing_mimes['svg'] = 'image/svg+xml';
        // call the modified list of extensions
	return $existing_mimes;
}
function register_taxonomies() {
	$args = array(
		'hierarchical'      => true,
		'label' 			=> 'Timeline category',
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		'rewrite'           => array( 'slug' => 'genre' ),
	);
	// create a new taxonomy
	register_taxonomy(
		'timeline_category',
		'post',
		$args
	);
}
Timber::$dirname = array('templates', 'views');
function getImgSrc($imgId) {
	$image = new TimberImage($imgId);
	return $image->src;
}
function getPageData($post) {

	$templateName = get_page_template_slug($post->ID);
	$post->templateName = substr($templateName, 0, strlen($templateName) - 4);
	switch ($post->templateName) {
	    case "gallery":
	    	if (is_array($post->gallery)) {
	    		$post->gallery = array_map("getImgSrc", $post->gallery);
	        	break;
	    	}
	    	else {
	    		$post->gallery = array();
	    	}
	    case "videos":
	    	$post->videos = $post->get_field("videos");
	    	break;
	}
	return $post;
}
class StarterSite extends TimberSite {
	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}
	function register_post_types() {
		//this is where you can register custom post types
	}
	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}
	function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['menu'] = new TimberMenu();
		$context['site'] = $this;
		$args = array(
			'post_type' => 'page',
			'posts_per_page' => -1,
			'orderby' => 'menu_order'
		);
		$pages = Timber::get_posts($args);
		$context['pages'] = array_map("getPageData", $pages);
		return $context;
	}
	function add_to_twig( $twig ) {
		/* this is where you can add your own fuctions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter( 'myfoo', new Twig_Filter_Function( 'myfoo' ) );
		return $twig;
	}
}
new StarterSite();
show_admin_bar( false );
function searchResult($post)
{
    return(array(
    	'title' => $post->post_title,
    	'link' => $post->link()
    ));
}
function search() {
	$args = array(
		'post_type'       => 'post',
		'posts_per_page'  => -1,
		's' => $_GET['s']
	);
	$query = new WP_Query( $args );
	relevanssi_do_query($query);
	$results = Timber::get_posts($query);
	$results = array_map("searchResult", $results);
	return $results;
}


function getSiteAssetUrls() {

	$asset_list = array();
	foreach(array('img', 'video') as $asset_type) {
		$dir = get_template_directory() . "/assets/$asset_type";
		$url_base = get_template_directory_uri() . "/assets/$asset_type";
		$files = scandir($dir);
		foreach ($files as $filename) {
			if (is_dir($filename)) continue;
			$asset_list[pathinfo($filename, PATHINFO_EXTENSION)][] = "$url_base/$filename";
		}
	}

	echo json_encode($asset_list);
}


/*
if (isset($_GET['s'])) {
	search();
	die();
}
*/

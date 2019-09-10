
import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import PageVideoBackground from './PageVideoBackground.js';
import AutoVideo from './AutoVideo.js';
import PageBase from './PageBase.js';

export default class PageTrailer extends Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
      <PageBase videoSrc={window.STATIC_URL + "/video/Audrey_Final.mp4"} blurb="Lorax is the best movie ever">
        <div className="page-trailer">
          <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi tellus, interdum et diam at, finibus elementum mi. Nulla faucibus est ut iaculis consequat. Mauris nec nibh quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt felis lacus, dignissim vestibulum augue rhoncus vitae. Sed id leo libero. Fusce quis augue a arcu laoreet aliquam et in massa. Praesent at maximus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris a leo purus. Aenean et purus in lectus tempor iaculis et faucibus lectus. Nunc vitae turpis eu magna ultrices cursus congue dignissim ex.

            Sed sed arcu vitae neque semper aliquet vel a libero. Vivamus vulputate, nulla eu euismod mattis, nunc ipsum lacinia lorem, quis vulputate purus sapien id enim. Quisque finibus dignissim mi nec rutrum. Nulla pharetra, sapien vel tincidunt ultricies, dolor augue aliquam purus, eu cursus nisl odio vitae diam. Duis vehicula enim quis justo malesuada bibendum. Fusce auctor efficitur arcu, id auctor orci vulputate at. Pellentesque eleifend nibh a velit scelerisque aliquam.

            Fusce auctor pretium justo, id placerat ligula sollicitudin nec. Donec fringilla risus ac orci imperdiet, ut varius elit ultricies. Nulla commodo, sapien sit amet egestas rutrum, ipsum lectus aliquam metus, non mollis ipsum sapien at nibh. Sed porta, nibh in semper consectetur, enim urna aliquam risus, id varius sem orci quis dolor. In faucibus interdum dolor, ut mollis turpis varius in. Praesent lobortis tincidunt porttitor. Aliquam pretium, enim quis molestie dictum, nunc libero semper dolor, vitae viverra eros tortor at nunc. Integer a dui nibh. Nulla non cursus est. Integer egestas turpis et pellentesque mollis. Mauris eu leo eros.

            Vivamus laoreet in risus eu eleifend. Mauris sagittis feugiat dui, id dignissim nisi molestie a. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ipsum nibh, pharetra eget arcu eu, mattis laoreet justo. In nec luctus nisi, ac vestibulum massa. Donec in accumsan dolor. Aliquam erat volutpat. Duis maximus feugiat enim, et ornare ipsum bibendum in. Etiam congue aliquet lectus, tristique interdum erat vulputate non. Duis vitae commodo ante. Cras fermentum turpis metus, quis pharetra libero faucibus quis. Nam sollicitudin scelerisque porttitor. Nunc eget orci urna.

            Phasellus volutpat ornare sollicitudin. Suspendisse bibendum mattis arcu vel sollicitudin. Proin euismod urna sit amet tempor viverra. Curabitur vehicula pulvinar quam in euismod. Ut lacus libero, mollis ut pharetra a, convallis id nisl. Cras sollicitudin dolor nec ex auctor vulputate. Donec et ultrices urna. Nullam id porta dui, ut pharetra augue. Vestibulum dapibus massa non felis bibendum, convallis finibus massa vulputate. Curabitur lobortis pretium ultrices. Fusce aliquet velit vel augue consectetur elementum. Pellentesque vel vulputate orci.

            Mauris rutrum mi at massa scelerisque, quis lacinia orci rutrum. Cras erat lorem, pharetra nec varius vel, gravida ut neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis iaculis laoreet. Phasellus pulvinar mi elit. Vivamus eget egestas tortor. Sed consectetur nisi vitae molestie imperdiet.

            Donec id egestas magna. Proin tincidunt odio at mi semper commodo. Vestibulum in ex pulvinar, euismod metus vitae, gravida arcu. Maecenas imperdiet ullamcorper mi, scelerisque condimentum purus fringilla eu. Nullam in mi mattis, finibus augue quis, pretium urna. Suspendisse sodales interdum libero sed lacinia. Aenean in sem a mi gravida dapibus. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus.

            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur justo eros, lobortis sit amet dolor at, fringilla condimentum sapien. In hac habitasse platea dictumst. Integer auctor posuere neque ac bibendum. Morbi velit odio, dictum id fringilla a, aliquam sit amet elit. Integer quis velit ultricies, condimentum est vitae, gravida ipsum. Morbi ut suscipit mi. In cursus ultrices est sit amet venenatis. Vestibulum vitae dictum dolor, et gravida diam. Duis nec magna a libero auctor fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac lectus nec velit molestie efficitur non vitae tortor. Phasellus volutpat sollicitudin nulla sed cursus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi tellus, interdum et diam at, finibus elementum mi. Nulla faucibus est ut iaculis consequat. Mauris nec nibh quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt felis lacus, dignissim vestibulum augue rhoncus vitae. Sed id leo libero. Fusce quis augue a arcu laoreet aliquam et in massa. Praesent at maximus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris a leo purus. Aenean et purus in lectus tempor iaculis et faucibus lectus. Nunc vitae turpis eu magna ultrices cursus congue dignissim ex.

            Sed sed arcu vitae neque semper aliquet vel a libero. Vivamus vulputate, nulla eu euismod mattis, nunc ipsum lacinia lorem, quis vulputate purus sapien id enim. Quisque finibus dignissim mi nec rutrum. Nulla pharetra, sapien vel tincidunt ultricies, dolor augue aliquam purus, eu cursus nisl odio vitae diam. Duis vehicula enim quis justo malesuada bibendum. Fusce auctor efficitur arcu, id auctor orci vulputate at. Pellentesque eleifend nibh a velit scelerisque aliquam.

            Fusce auctor pretium justo, id placerat ligula sollicitudin nec. Donec fringilla risus ac orci imperdiet, ut varius elit ultricies. Nulla commodo, sapien sit amet egestas rutrum, ipsum lectus aliquam metus, non mollis ipsum sapien at nibh. Sed porta, nibh in semper consectetur, enim urna aliquam risus, id varius sem orci quis dolor. In faucibus interdum dolor, ut mollis turpis varius in. Praesent lobortis tincidunt porttitor. Aliquam pretium, enim quis molestie dictum, nunc libero semper dolor, vitae viverra eros tortor at nunc. Integer a dui nibh. Nulla non cursus est. Integer egestas turpis et pellentesque mollis. Mauris eu leo eros.

            Vivamus laoreet in risus eu eleifend. Mauris sagittis feugiat dui, id dignissim nisi molestie a. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ipsum nibh, pharetra eget arcu eu, mattis laoreet justo. In nec luctus nisi, ac vestibulum massa. Donec in accumsan dolor. Aliquam erat volutpat. Duis maximus feugiat enim, et ornare ipsum bibendum in. Etiam congue aliquet lectus, tristique interdum erat vulputate non. Duis vitae commodo ante. Cras fermentum turpis metus, quis pharetra libero faucibus quis. Nam sollicitudin scelerisque porttitor. Nunc eget orci urna.

            Phasellus volutpat ornare sollicitudin. Suspendisse bibendum mattis arcu vel sollicitudin. Proin euismod urna sit amet tempor viverra. Curabitur vehicula pulvinar quam in euismod. Ut lacus libero, mollis ut pharetra a, convallis id nisl. Cras sollicitudin dolor nec ex auctor vulputate. Donec et ultrices urna. Nullam id porta dui, ut pharetra augue. Vestibulum dapibus massa non felis bibendum, convallis finibus massa vulputate. Curabitur lobortis pretium ultrices. Fusce aliquet velit vel augue consectetur elementum. Pellentesque vel vulputate orci.

            Mauris rutrum mi at massa scelerisque, quis lacinia orci rutrum. Cras erat lorem, pharetra nec varius vel, gravida ut neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis iaculis laoreet. Phasellus pulvinar mi elit. Vivamus eget egestas tortor. Sed consectetur nisi vitae molestie imperdiet.

            Donec id egestas magna. Proin tincidunt odio at mi semper commodo. Vestibulum in ex pulvinar, euismod metus vitae, gravida arcu. Maecenas imperdiet ullamcorper mi, scelerisque condimentum purus fringilla eu. Nullam in mi mattis, finibus augue quis, pretium urna. Suspendisse sodales interdum libero sed lacinia. Aenean in sem a mi gravida dapibus. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus.

            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur justo eros, lobortis sit amet dolor at, fringilla condimentum sapien. In hac habitasse platea dictumst. Integer auctor posuere neque ac bibendum. Morbi velit odio, dictum id fringilla a, aliquam sit amet elit. Integer quis velit ultricies, condimentum est vitae, gravida ipsum. Morbi ut suscipit mi. In cursus ultrices est sit amet venenatis. Vestibulum vitae dictum dolor, et gravida diam. Duis nec magna a libero auctor fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac lectus nec velit molestie efficitur non vitae tortor. Phasellus volutpat sollicitudin nulla sed cursus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisi tellus, interdum et diam at, finibus elementum mi. Nulla faucibus est ut iaculis consequat. Mauris nec nibh quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt felis lacus, dignissim vestibulum augue rhoncus vitae. Sed id leo libero. Fusce quis augue a arcu laoreet aliquam et in massa. Praesent at maximus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris a leo purus. Aenean et purus in lectus tempor iaculis et faucibus lectus. Nunc vitae turpis eu magna ultrices cursus congue dignissim ex.

            Sed sed arcu vitae neque semper aliquet vel a libero. Vivamus vulputate, nulla eu euismod mattis, nunc ipsum lacinia lorem, quis vulputate purus sapien id enim. Quisque finibus dignissim mi nec rutrum. Nulla pharetra, sapien vel tincidunt ultricies, dolor augue aliquam purus, eu cursus nisl odio vitae diam. Duis vehicula enim quis justo malesuada bibendum. Fusce auctor efficitur arcu, id auctor orci vulputate at. Pellentesque eleifend nibh a velit scelerisque aliquam.

            Fusce auctor pretium justo, id placerat ligula sollicitudin nec. Donec fringilla risus ac orci imperdiet, ut varius elit ultricies. Nulla commodo, sapien sit amet egestas rutrum, ipsum lectus aliquam metus, non mollis ipsum sapien at nibh. Sed porta, nibh in semper consectetur, enim urna aliquam risus, id varius sem orci quis dolor. In faucibus interdum dolor, ut mollis turpis varius in. Praesent lobortis tincidunt porttitor. Aliquam pretium, enim quis molestie dictum, nunc libero semper dolor, vitae viverra eros tortor at nunc. Integer a dui nibh. Nulla non cursus est. Integer egestas turpis et pellentesque mollis. Mauris eu leo eros.

            Vivamus laoreet in risus eu eleifend. Mauris sagittis feugiat dui, id dignissim nisi molestie a. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ipsum nibh, pharetra eget arcu eu, mattis laoreet justo. In nec luctus nisi, ac vestibulum massa. Donec in accumsan dolor. Aliquam erat volutpat. Duis maximus feugiat enim, et ornare ipsum bibendum in. Etiam congue aliquet lectus, tristique interdum erat vulputate non. Duis vitae commodo ante. Cras fermentum turpis metus, quis pharetra libero faucibus quis. Nam sollicitudin scelerisque porttitor. Nunc eget orci urna.

            Phasellus volutpat ornare sollicitudin. Suspendisse bibendum mattis arcu vel sollicitudin. Proin euismod urna sit amet tempor viverra. Curabitur vehicula pulvinar quam in euismod. Ut lacus libero, mollis ut pharetra a, convallis id nisl. Cras sollicitudin dolor nec ex auctor vulputate. Donec et ultrices urna. Nullam id porta dui, ut pharetra augue. Vestibulum dapibus massa non felis bibendum, convallis finibus massa vulputate. Curabitur lobortis pretium ultrices. Fusce aliquet velit vel augue consectetur elementum. Pellentesque vel vulputate orci.

            Mauris rutrum mi at massa scelerisque, quis lacinia orci rutrum. Cras erat lorem, pharetra nec varius vel, gravida ut neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse lobortis iaculis laoreet. Phasellus pulvinar mi elit. Vivamus eget egestas tortor. Sed consectetur nisi vitae molestie imperdiet.

            Donec id egestas magna. Proin tincidunt odio at mi semper commodo. Vestibulum in ex pulvinar, euismod metus vitae, gravida arcu. Maecenas imperdiet ullamcorper mi, scelerisque condimentum purus fringilla eu. Nullam in mi mattis, finibus augue quis, pretium urna. Suspendisse sodales interdum libero sed lacinia. Aenean in sem a mi gravida dapibus. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus.

            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur justo eros, lobortis sit amet dolor at, fringilla condimentum sapien. In hac habitasse platea dictumst. Integer auctor posuere neque ac bibendum. Morbi velit odio, dictum id fringilla a, aliquam sit amet elit. Integer quis velit ultricies, condimentum est vitae, gravida ipsum. Morbi ut suscipit mi. In cursus ultrices est sit amet venenatis. Vestibulum vitae dictum dolor, et gravida diam. Duis nec magna a libero auctor fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac lectus nec velit molestie efficitur non vitae tortor. Phasellus volutpat sollicitudin nulla sed cursus.

          </div>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1bHdzTUNw-4" frameborder="0" allowfullscreen>
          </iframe>
        </div>
      </PageBase>
    );
  }
}

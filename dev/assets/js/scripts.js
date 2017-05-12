window.onload = function(){
  init();
}

function init(){
  console.log('Initialised. Ready for instructions...');
  var body = document.body;
  var container = document.createElement('div');
  var header = document.createElement('header');
  var footer = document.createElement('footer');
  var elems = '<div class="site-wrapper-inner">' +
              '<div class="cover-container"><div class="inner cover launchpad" id="launchpad">' +
                '<a href="#studio" class="go col-xs-6 col-sm-6 col-md-4" id="launchStudio">' +
                  '<div><img src="assets/img/recording-studio.jpeg" alt="Record at 1st Base"/><span>Recording studio</span></div></a>' +
                '<a href="#events" class="go col-xs-6 col-sm-6 col-md-4" id="launchEvents">' +
                  '<div><img src="assets/img/live-events.jpeg" alt="Events management"/><span>Live Events management</span></div></a>' +
                '<a href="#artists" class="go col-xs-6 col-sm-6 col-md-4" id="launchArtists">' +
                  '<div><img src="assets/img/artist-management.jpeg" alt="Artist development"/><span>Artist management</span></div></a>' +
                '<a href="#photography" class="go col-xs-6 col-sm-6 col-md-4" id="launchPhotography">' +
                  '<div><img src="assets/img/photography.jpeg" alt="Photography"/><span>Photography</span></div></a>' +
                '<a href="#media" class="go col-xs-6 col-sm-6 col-md-4" id="launchMedia">' +
                  '<div><img src="assets/img/media-coverage.jpeg" alt="Media coverage"/><span>Media</span></div></a>' +
                '<a href="#network" class="go col-xs-6 col-sm-6 col-md-4" id="launchNetwork">' +
                  '<div><img src="assets/img/music-network.jpeg" alt="Join our network"/><span>Join our Network</span></div></a>' +
                '</div></div>' +
              '</div>';

  var headerElems = '<div class="inner">' +
                    '<h3 class="masthead-brand logo">' +
                      '<img src="assets/img/graphics/logo.png" alt="Join our network"/>' +
                      '<span>1st Base Entertainment</span></h3>' +
                    '<nav class="navbar"><ul class="nav masthead-nav">'+
                    '<li><a href="#about" class=" active col-xs-12" id="about">Who we are</a></li>' +
                    '<li><a href="#contact" class=" col-xs-12" id="contact">Get in touch</a></li>' +
                    '<li><a href="#legal" class=" col-xs-12" id="legal">Working with us</a></li>' +

                    '<li><a href="#studio" class=" active col-xs-12" id="studio">Hire the studio</a></li>' +
                    '<li><a href="#events" class=" col-xs-12" id="events">Live events</a></li>' +
                    '<li><a href="#artists" class=" col-xs-12" id="artists">Artist development</a></li>' +
                    '<li><a href="#photography" class=" active col-xs-12" id="photography">Photography</a></li>' +
                    '<li><a href="#media" class=" col-xs-12" id="media">Media Coverage</a></li>' +
                    '<li><a href="#network" class=" col-xs-12" id="network">Networks and links</a></li>' +
                    '</ul></nav>' +
                    '</div>';

  var footerElems = '<div class="inner">' +
                      '<p>&copy; 2017 1st Base Entertainment</p>' +
                    '</div>';

  var about = '<div class="coverImg row"><img src="assets/img/media-coverage.jpeg" alt="Photography" class="col-xs-12"/></div>' +
              '<div><h1>About us</h1>' +
              '<p>1st Base Entertainment is a music production house based in Bedford, Bedfordshire. We are a talented group of songwriters, ' +
              'producers and sound engineers who work out of 1st Base studio . We create music for placement with publishers, film and adverts' +
              '(jingles, background textures) and would welcome all musicians and artists who would like a good serious musical experience.</p>' +
              '<p>Our services include a variety of things from recording and tracking a session to mixing down a track, we also do a lot of co-writing' +
              'for unsigned artists as part of this service. Each project is bespoke and so we do not have a set price before consulting with a prospective ' +
              'client to know exactly what they re after but click here for a price list for studio hire and set packages .</p></div>' ;

  var contact = '<div class="coverImg row"><img src="assets/img/live-events.jpeg" alt="Contact us" class="col-xs-12"/></div>' +
              '<div><h1>Contact us</h1>'+
              '<p>You can contact us either on <a href="#social_media" title="social media links" id="socialMediaTrigger" class="catalyst"/>social media</a> or directly on the website using the provided ' +
              '<a href="#enquiriesForm" title="Enquiry form" id="enquiriesFrmTrigger" class="catalyst"/>enquiries form</a>, you can also use this form to make a complaint or raise an issue . If you wish to book the studio please use the studio ' +
              '<a href="#bookingsForm" title="Bookings form" id="bookingsFormTrigger" class="catalyst"/>booking form</a> instead. Please make sure you read through our bookings protocol as you will be required to provide a few items before your sessions.</p>' +
              '<p>There are also prerequisite contracts, terms and conditions and other documentation which you need to read and sign before using use the studio . ' +
              'You can read or download a copy of these and any other documents on the <a href="#documentation" title="Documents cache" id="docsTrigger" class="catalyst">documentation page</a>.</p></div>';

  var legal = '<div class="coverImg row"><img src="assets/img/corporate-events.jpeg" alt="Legal sections" class="col-xs-12"/></div>' +
              '<div><h1>Terms and conditions</h1><div class="" id="studioTerms">' +
              '<dl><dt>Studio hire and Packages</dt><dd>Engineer provided on request at extra cost, Engineer costs vary depending on individual engineers, length of session and work required, please see engineers section.</dd>' +
              '<dt>Engineers</dt><dd>Any tracks created externally and submitted for mixing will be evaluated before a price is assigned, price fluctuations are due to standard of audio submitted, and size of project. Please be advised that a standard full project is considered up to 24 tracks for digital sessions and 32 tracks for a live session</dd>' +
              '<dt>Bookings and reservations</dt><dd>Studio bookings must be made with at list 96hours prior to the session. A confirmation via email will be sent and this will be used as a reciept of payment for the session.</dd>' +
              '<dt>Refunds </dt><dd>Any cancellations to sessions must be made at least 24hours prior to the studio sessions otherwise they will incur an admin fee of £20 , which is the norminal booking holding fee for all sessions to lock in bookings for studio or engineering time. Refunds will be made in the form of a bank transfer into the account which made the initial transaction. </dd></dl>' +
              '</div></div>';

  var studio = '<div class="coverImg row"><img src="assets/img/recording-studio.jpeg" alt="Recording studio" class="col-xs-12"/></div>' +
               '<h1>Studio</h1>'+
               '<h2>Packages and studio hire</h2><div class="row" id="studioPackages"><div class="row packages col-md-8 col-md-offset-2"><div class="standard col-xs-12 col-sm-6 col-md-3 ">' +
               '<h3>Standard Package </h3><p><b>£12 per hour</b></p><div class="rates"><p>4 hour session - £60</p><p>8 hour session - £100</p>' +
               '<p>10 hour session - £120</p><p>15hour session - £175</p><p>24hour lock-in session - £300</p></div><div class="terms">' +
               '<p>Standard package available to all clients booking the studio with no addons. Check availability</p></div></div>' +
               '<div class="vip col-xs-12 col-sm-6 col-md-3 "><h3>VIP Package</h3><p><b>£10 per hour</b></p>' +
               '<div class="rates"><p>4 hour session - £40</p><p>8 hour session - £80</p><p>10 hour session - £100</p><p>15hour session - £150</p><p>24hour lock-in session - £240</p>' +
               '</div><div class="terms"><p>Package available to 1st Base Entertainment VIP subscribers, client account must be active</p>' +
               '</div></div><div class="students col-xs-12 col-sm-6 col-md-3 ">' +
               '<h3>Student Package</h3><p><b>£12 per hour</b></p><div class="rates"><p>4 hour session - £48</p><p>8 hour session - £80</p>' +
               '<p>10 hour session - £120</p><p>15hour session - £180</p><p>24hour lock-in session - £260</p></div><div class="terms">' +
               '<p>Package available to anyone who is in full time education and can provide school references and contacts</p></div></div>' +
               '<div class="concession col-xs-12 col-sm-6 col-md-3 "><h3>Concessions Package</h3><p><b>£12 per hour</b></p>' +
               '<div class="rates"><p>4 hour session - £48</p><p>8 hour session - £80</p><p>10 hour session - £120</p>' +
               '<p>15hour session - £180</p><p>24hour lock-in session - £260</p></div><div class="terms">' +
               '<p>Package available to anyone who is in full time education and can provide school references and contacts</p>' +
               '</div></div></div><div class="container col-md-8 col-md-offset-2">' +
               '<p class="note"><sup>*</sup>Engineer provided on request at extra cost, Engineer costs vary depending on individual engineers, length of session and work required, please see engineers section.</p>' +
               '</div><div class="container col-md-8 col-md-offset-2"><div class="booking"><h2>Booking the studio is simple.</h2>' +
               '<p class="col-xs-12 col-sm-6 col-md-4">You can book the studio via <a href="mailto:enquiries@firstbaseentertainment.com"><i class="glyphicon glyphicon-envelope"></i>email</a> or giving us a <a tel="07747633005"><i class="glyphicon glyphicon-phone"></i>call now</a>.Booking way in advance increases the chance of getting your preferred slot as some premium times are always prebooked. We advise booking at least 2 weeks in advance for sessions requiring a sound engineer present, and a week advance booking for regular sessions. Please read the studio hire <a href="../terms/">terms and conditions</a></p>' +
               '<p class="col-xs-12 col-sm-6 col-md-4">For general enquiries or complaints, you can also use our social media channels for prompt, public facing responses. For mixing, sound sculpting and mastering services ,please try to send an <a href="mailto:enquiries@firstbaseentertainment.com"><i class="glyphicon glyphicon-envelope"></i>email</a> detailing the project you need us to work on, please attach samples of your project where possible for more accurate quotes. Please note engineering and mixing services are seperate to studio hire</p>' +
               '<p class=" contact-links col-xs-12 col-sm-12 col-md-4"><a href="https://www.facebook.com/1stBaseEnt/" target="_blank"><i class="social facebook"></i></a>' +
               '<a href="https://twitter.com/1stBaseEnt" target="_blank"><i class="social twitter"></i></a>' +
               '<a href="https://www.instagram.com/1stbaseent/" target="_blank"><i class="social instagram"></i></a></p></div></div></div><h2>Our engineers</h2>' +
               '<div class="row" id="engineersPackages"><div class="row engineer col-md-8 col-md-offset-2">' +
               '<div class="col-xs-12 col-sm-6"><div class="photo col-xs-12 col-sm-4 col-md-3">' +
               '<img class="" src="assets/img/team/nick.jpg" alt="Nick Chikore">' +
               '</div><div class="info col-xs-12 col-sm-8 col-md-9">' +
               '<h3>Nick Chikore</h3><p><b>Specialist genres:</b> <em>rnb, soul, hiphop, indie</em></p>' +
               '<ul><li>£10 per hour</li><li>£30 - 4 hours</li><li>£60 - 8 hours</li><li>£100 - 12 hours</li>' +
               '<li>£120 per standard track, £80 per track recorded with by 1st base entertainment</li></ul></div></div>' +
               '<div class="col-xs-12 col-sm-6"><div class="photo col-xs-12 col-sm-4 col-md-3">' +
               '<img class="img-circle" src="assets/img/team/nick.jpg" alt="Luke Masih"></div>' +
               '<div class="info col-xs-12 col-sm-8 col-md-9"><h3>Luke Masih</h3><p><b>Specialist genres:</b> <em>rnb, soul, hiphop, indie</em></p>' +
               '<ul><li>£10 per hour</li><li>£30 - 4 hours</li><li>£60 - 8 hours</li><li>£100 - 12 hours</li>' +
               '<li>£120 per standard track, £80 per track recorded with by 1st base entertainment</li></ul></div></div></div>' +
               '<div class="container col-md-8 col-md-offset-2">' +
               '<p class="note"><sup>**</sup>Any tracks created externally and submitted for mixing will be evaluated before a price is assigned,' +
               'price fluctuations are due to standard of audio submitted, and size of project. Please be  advised that a standard full project is ' +
               'considered up to 24 tracks for digital sessions and 32 tracks for a live session</p></div></div>' ;

  var events = '<div class="coverImg row"><img src="assets/img/live-events.jpeg" alt="Recording studio" class="col-xs-12"/></div>' +
               '<h1>Events management</h1>'+
               '';

  var artists = '<div class="coverImg row"><img src="assets/img/artist-management.jpeg" alt="Artist management" class="col-xs-12"/></div>' +
               '<h1>Artist management</h1>' +
               '';

  var photography = '<div class="coverImg row"><img src="assets/img/photography.jpeg" alt="Photography" class="col-xs-12"/></div>' +
               '<h1>Photography</h1>' +
               '<p>We have a number of photographers who specialise in different areas, check out our gallery and <a href="#enquiriesForm" title"Contact photographers">contact us about your next event.</p>';

  var media = '<div class="coverImg row"><img src="assets/img/media-coverage.jpeg" alt="Media coverage" class="col-xs-12"/></div>' +
               '<h1>Media coverage</h1>' +
               '<p>From time to time the media covers stories which involve 1st base entertainment. Here are a few of the latest articles publicshed on our work</p>';

  var network = '<div class="coverImg row"><img src="assets/img/music-network.jpeg" alt="Music networking" class="col-xs-12"/></div>' +
                '<h1>Our Network</h1>' +
                '<p>We have worked with a lot of music professionals and done work for some very well known companies.</p><p> Join our network as a producer , songwriter or engineer and we can collaborate on projects as well as send you briefs we are working on for record labels and submissions.</p>';

  var enquiriesForm =  '<div class="form">' +
                      '<h4>Enquiry form</h4><form id="enquiriesForm"><span class="errors"></span><div class="form-row">' +
                      '<label for="name"></label><input type="text" name="name" value=""></div>' +
                      '<div class="form-row"><label for="email"></label><input type="email" name="email" value=""></div>' +
                      '<div class="form-row"><label for="telephone"></label><input type="tel" name="phone" value=""></div>' +
                      '<div class="form-row"><input type="submit" name="submit" value=""></div></form></div>' ;

  function preload(){
    var loadsheet = document.createElement('div');
    loadsheet.setAttribute('id', 'preload');
    loadsheet.style.position = 'absolute';
    loadsheet.style.top = '0';
    loadsheet.style.left = '0';
    loadsheet.style.right = '0';
    loadsheet.style.bottom = '0';
    loadsheet.style.zIndex = '2000';
    loadsheet.style.background = 'black';
    document.body.appendChild(loadsheet);

  }

  function page(){
    header = body.appendChild(header);
    container = body.appendChild(container);
    footer = body.appendChild(footer);
    header.setAttribute('class','masthead clearfix');
    container.setAttribute('class', 'site-wrapper');
    footer.setAttribute('class','mastfoot');
    var addId = container.getAttribute('class');
    container.setAttribute('id', addId);
    header.innerHTML = headerElems;
    container.innerHTML= elems;
    footer.innerHTML= footerElems;
    //var preload = document.getElementById('preload');
    $('#preload').addClass('hidden');
    initNavTrigger();
    function initNavTrigger(){
      wwidth = $(window).width();
      wheight = $(window).height();
      var mobile = wwidth < 768;
      var desk = wwidth > 768;
      var header = $('header');
      var nav = $('.navbar ul');
      var hamburger = '<span></span><span></span><span></span>';
      var navTrigger = document.createElement('span');
      navTrigger.setAttribute("class","trigger");

      if(mobile){
        $(header).addClass('mob');
        //navTrigger.setAttribute("class","trigger");
        console.log('moblie');
      }
      else{
        $(header).removeClass('mob');
        $(header).addClass('desk');
      }
      $(nav).parent().append(navTrigger);
      navTrigger.innerHTML = hamburger;
      $(nav).css('height', wheight);
      $('.trigger').click(function(){
        $(nav).toggleClass('active');
        $('.trigger').toggleClass('active');
        $(nav).parent().toggleClass('on');
        var activeNav = $(nav).hasClass('active');
      });
    }
  }

  function initComponents(){
    console.log('init comps');
    var formWrapper = document.createElement('div');
    //var form = formWrapper.children('form').getAttribute('id');
    formWrapper.setAttribute('id', 'formWrapper');
    formWrapper.innerHTML = enquiriesForm;
    var body = document.body;
    var enquiriesFrmTrigger = document.getElementById('enquiriesFrmTrigger');
    var bookingsFrmTrigger = document.getElementById('bookingsFrmTrigger');
    var socialMediaTrigger = document.getElementById('socialMediaTrigger');
    var docsTrigger = document.getElementById('docsTrigger');
    var modal = document.createElement('div');
    var dismiss = document.createElement('span');
    dismiss.setAttribute('id', 'closeModal');
    modal.setAttribute('id', 'modal');
    modal.setAttribute('class', 'modal');

    $('.catalyst').click(function(){
      console.log("Catalyst");

      body.appendChild(modal);
      modal.addClass('active');
      modal.appendChild(dismiss);

    });

    $(enquiriesFrmTrigger).click(function(){
      console("init");
    });

    $(bookingsFrmTrigger).click(function(){
      console("init");
    });

    $(socialMediaTrigger).click(function(){
      console("init");
    });

    $(docsTrigger).click(function(){
      console("init");
    });

  }

  $(window).resize(function() {
    var nav = $('.navbar ul');
    var hamburger = '<span></span><span></span><span></span>';
    var mobile = wwidth < 768;
    var navTrigger= document.createElement('span');
    var navCount = $(nav).parent().children().length;
    $('.trigger').remove();
    //$(nav).removeClass('active');
    //$(nav).parent().removeClass('active');
    //$(nav).removeClass('on');
    //$('.navbar').removeClass('on');
    wwidth = $(window).width(); //get the height of the window
    wheight = $(window).height(); //get the height of the window

    $('#site-wrapper').css('margin-bottom', '100px');
    navTrigger.setAttribute("class","trigger");
    if(navCount <= 1){
        $(nav).parent().append(navTrigger);
        navTrigger.innerHTML = hamburger;
    }//activate hamburger
    $(navTrigger).click(function(){
      $(nav).toggleClass('active');
      $(this).toggleClass('active');
      $(nav).css('display','inherit');
      $('.launchpad').css('top','100px');
    });
     if (mobile) {
      $(nav).css('display','none');
      $('header').addClass('mob');
      $('.mob .navbar ul').css('height', wheight);
      $('.masthead-brand').css('font-size','16px');
    }
    else{
      $('header').removeClass('mob');
      $('header').addClass('desk');
      console.log('trigger removed');
    }


  });

  function report(){
    function linkAttr(){
      var link = document.getElementsByTagName('a');
      var linkCount = link.length;
      if(linkCount > 0){
        console.log('You have ' + linkCount + ' hyperlinks available ');
      }
    }
    linkAttr();
  }

  function createPages(){
    var aboutPage = document.createElement('div');
        aboutPage.setAttribute('id', 'about_page');
        aboutPage.setAttribute('class','page col-xs-12');
        aboutPage.innerHTML = about;

    var contactPage = document.createElement('div');
        contactPage.setAttribute('id', 'contact_page');
        contactPage.setAttribute('class','page col-xs-12');
        contactPage.innerHTML = contact;

    var legalPage = document.createElement('div');
        legalPage.setAttribute('id', 'legal_page');
        legalPage.setAttribute('class','page col-xs-12');
        legalPage.innerHTML = legal;

    var studioPage = document.createElement('div');
        studioPage.setAttribute('id', 'studio_page');
        studioPage.setAttribute('class','page col-xs-12');
        studioPage.innerHTML = studio;

    var eventsPage = document.createElement('div');
        eventsPage.setAttribute('id', 'events_page');
        eventsPage.setAttribute('class','page col-xs-12');
        eventsPage.innerHTML = events;

    var artistsPage = document.createElement('div');
        artistsPage.setAttribute('id', 'artists_page');
        artistsPage.setAttribute('class','page col-xs-12');
        artistsPage.innerHTML = artists;

    var photographyPage = document.createElement('div');
        photographyPage.setAttribute('id', 'photography_page');
        photographyPage.setAttribute('class','page col-xs-12');
        photographyPage.innerHTML = photography;

    var mediaPage = document.createElement('div');
        mediaPage.setAttribute('id', 'media_page');
        mediaPage.setAttribute('class','page col-xs-12');
        mediaPage.innerHTML = media;

    var networkPage = document.createElement('div');
        networkPage.setAttribute('id', 'network_page');
        networkPage.setAttribute('class','page col-xs-12');
        networkPage.innerHTML = network;

    //console.log('Loaded pages');
    function addListeners(){
      var aboutLink = document.getElementById('about');
      var contactLink = document.getElementById('contact');
      var legalLink = document.getElementById('legal');
      var studioLink = document.getElementById('studio');
      var launchstudioLink = document.getElementById('launchStudio');
      var eventsLink = document.getElementById('events');
      var launcheventsLink = document.getElementById('launchEvents');
      var artistsLink = document.getElementById('artists');
      var launchartistsLink = document.getElementById('launchArtists');
      var photographyLink = document.getElementById('photography');
      var launchphotographyLink = document.getElementById('launchPhotography');
      var mediaLink = document.getElementById('media');
      var launchmediaLink = document.getElementById('launchMedia');
      var networkLink = document.getElementById('network');
      var launchnetworkLink = document.getElementById('launchNetwork');

      aboutLink.addEventListener('click', function(){
        container.appendChild(aboutPage);
        $(aboutPage).addClass('active');
      });//about us

      contactLink.addEventListener('click', function(){
        container.appendChild(contactPage);
        $(contactPage).addClass('active');
      });//contact us

      legalLink.addEventListener('click', function(){
        container.appendChild(legalPage);
        $(legalPage).addClass('active');
      });//legal page

      studioLink.addEventListener('click', function(){
        container.appendChild(studioPage);
        $(studioPage).addClass('active');
      });//studio page

      eventsLink.addEventListener('click', function(){
        container.appendChild(eventsPage);
        $(eventsPage).addClass('active');
      });//events page

      artistsLink.addEventListener('click', function(){
        container.appendChild(artistsPage);
        $(artistsPage).addClass('active');
      });//artists page

      photographyLink.addEventListener('click', function(){
        container.appendChild(photographyPage);
        $(photographyPage).addClass('active');
      });//photography page

      mediaLink.addEventListener('click', function(){
        container.appendChild(mediaPage);
        $(mediaPage).addClass('active');
      });//media page

      networkLink.addEventListener('click', function(){
        container.appendChild(networkPage);
        $(networkPage).addClass('active');
      });//network page

      launchstudioLink.addEventListener('click', function(){
        container.appendChild(studioPage);
        $(studioPage).addClass('active');
      });//studio page

      launcheventsLink.addEventListener('click', function(){
        container.appendChild(eventsPage);
        $(eventsPage).addClass('active');
      });//events page

      launchartistsLink.addEventListener('click', function(){
        container.appendChild(artistsPage);
        $(artistsPage).addClass('active');
      });//artists page

      launchphotographyLink.addEventListener('click', function(){
        container.appendChild(photographyPage);
        $(photographyPage).addClass('active');
      });//photography page

      launchmediaLink.addEventListener('click', function(){
        container.appendChild(mediaPage);
        $(mediaPage).addClass('active');
      });//media page

      launchnetworkLink.addEventListener('click', function(){
        container.appendChild(networkPage);
        $(networkPage).addClass('active');
      });//network page
    }

    addListeners();
  }

  function navigateSite(){
    $('.navbar li a').click(function(){
      var linkId = $(this).attr('id');
      var currPage = ('#' + linkId + '_page');
      console.log('Navigate to ' + currPage);

      $('.site-wrapper-inner').remove();
      $('.nav').parent().children().toggleClass('active');
      $('.nav').parent().removeClass('on');
      $(currPage).addClass('active');
      $(currPage).siblings('.page').remove();
    });

    $('.launchpad a').click(function(){

    });

    $('.logo span').click(function(){

    });
  }


  //  preload();
  page();
  report();
  createPages();
  navigateSite();
  initComponents();

}


/*function rejects(){
  $('.navbar li a').click(function(){
    var attr = $(this).attr('href');
    console.log(attr + 'link has been clicked');
    $('.page').toggleClass('active');
    //$('.page').toggleClass('active');
    $('.site-wrapper').toggleClass('topMargin');
    $('.site-wrapper-inner').css('display','none');
    $('.nav').removeClass('active');
    $('.trigger').removeClass('active');
      if($('.navbar').hasClass('on')){
        $('.navbar').removeClass('on');
    }
    var isActive = $('.page').hasClass('active');
    if(!isActive){
      $('.page').remove();
    }
  });

  $('.launchpad a').click(function(){
    $('.site-wrapper').toggleClass('topMargin');
    $('.site-wrapper-inner').css('display','none');
    if($('.navbar').hasClass('on')){
      $('.navbar').removeClass('on');
    }
  });

  $('.logo span').click(function(){
    $('.site-wrapper-inner').css('display','block');
    $('.page').remove();
  });
}
*/

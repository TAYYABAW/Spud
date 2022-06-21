import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

   
  }
  h1, h2, h3, h4, h5, h6 , li, a,.btn.content-btn  ,.author-area .card .card-body .input-group .input-group-append button ,.author-area .item-form .form-group input, .author-area .item-form .form-group textarea, .author-area .item-form .form-group select, .author-area .item-form .form-group .custom-file-input, .author-area .item-form .form-group .custom-file-label, .author-area .item-form .form-group .custom-file-label::after,.author-area .card .card-body .input-group .input-group-append button,.explore-area .explore-menu .btn , .breadcrumb,.item-details-area .owner .owner-meta:hover h6,.item-details-area .netstorm-tab li a.active h5,.item-details-area .tab-content .single-tab-list strong, .item-details-area .tab-content .single-tab-list a ,
  header .navbar-expand .navbar-nav .dropdown-menu .nav-link.title , .breadcrumb-area .breadcrumb-item.active, .breadcrumb-area .breadcrumb-item.active:hover,.breadcrumb-area .breadcrumb-content .breadcrumb .breadcrumb-item + .breadcrumb-item::before ,header .navbar-expand .dropdown .dropdown-item.active, header .navbar-expand .dropdown .dropdown-item:hover, header .navbar-expand .dropdown .dropdown-item:active  , header .navbar-expand:not(.navbar-sticky) .navbar-nav .dropdown-menu .nav-link:not(.btn)  ,header .navbar-expand:not(.navbar-sticky) .navbar-nav .nav-link:not(.btn) , header .navbar-expand:not(.navbar-sticky) .navbar-brand , header .navbar-expand .navbar-nav .dropdown-menu .nav-link:not(.btn), header .navbar-expand .navbar-nav .nav-link.active:not(.btn):not(.title), header .navbar-expand .navbar-brand i, header .navbar-expand .navbar-brand, .hero-section h1,div,.footer-area .footer-items .subscribe-form .form-control,.odd h4 , p, ::-webkit-input-placeholder ,.footer-area .footer-items .footer-title,.footer-area .footer-items .navbar-brand ,.footer-area .footer-items .subscribe-form .form-control,.footer-area .footer-items .subscribe-form input::-webkit-input-placeholder ,.footer-area .footer-items ul li a,.footer-area .copyright-area a, ::placeholder , input:focus, textarea:focus, select:focus, input, input:focus,input[type="submit"], .author-area .card .card-body .input-group .input-group-append button, .author-area .item-form .form-group input, .author-area .item-form .form-group textarea, .author-area .item-form .form-group select, .author-area .item-form .form-group .custom-file-input, .author-area .item-form .form-group .custom-file-label, .author-area .item-form .form-group .custom-file-label::after , .footer-area .footer-items .subscribe-form input::-webkit-input-placeholder , .footer-area .footer-items .subscribe-form input::placeholder , .activity-area .tab-content .single-tab-list strong, .activity-area .tab-content .single-tab-list a , h5 , header > a , header .navbar-sticky, header .navbar-expand .navbar-nav .nav-link:not(.btn), .card .card-body .card-bottom span, .live-auctions-area .card .seller span, .countdown, .btn ,   .card .card-body .card-bottom span  {
    color: ${({ theme }) => theme.text};
  }
  
  header,.hero-section,.modal-content , .overlay-dark::after, .overlay-dark , form-control,.author-area .item-form .form-group input, .author-area .item-form .form-group textarea, .author-area .item-form .form-group select, .author-area .item-form .form-group .custom-file-input, .author-area .item-form .form-group .custom-file-label, .author-area .item-form .form-group .custom-file-label::after , .navbar-sticky , .footer-area,.footer-area .footer-items .subscribe-form .form-control, .author-area .item-form .form-group .form-check-input   {
    background: ${({ theme }) => theme.body};
    }
    





  header .navbar-expand .navbar-nav .nav-link:not(.btn):not(.title):hover {
    color: ${({ theme }) => theme.hovercolor};
  }

  .seller-info .seller, .breadcrumb-area .breadcrumb-item a:not(.btn), .breadcrumb-area .breadcrumb-item.active {
    color: ${({ theme }) => theme.text} !important;

  }

  .author-area .card .card-body hr {
    border-top: 1px dashed ${({ theme }) => theme.text};

  }
  


  .card{
    background-color: ${({ theme }) => theme.cardcolor};
    
  }

 

  .btn.btn-bordered-white {
    border: 2px solid ${({ theme }) => theme.text};
  }



    `;

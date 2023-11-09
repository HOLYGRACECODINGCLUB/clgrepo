import React, { useEffect } from 'react';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import 'magnific-popup/dist/magnific-popup.css';
import './fontawesome/css/all.min.css';
import './css/magnific-popup.css';
import './css/tooplate-vertex.css';

const App1 = () => {
  useEffect(() => {
    $(window).on('load', function() {
      $('body').addClass('loaded');
    });

    const galleryItems = document.querySelector('.tm-gallery').children;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
    const pageAttribute = 'data-page';

    function setPagination(currentPage) {
      for (let i = 1; i <= totalPages; i++) {
        var $pager = '';

        if (currentPage === i) {
          $pager = $('<a href="javascript:void(0);" class="active tm-paging-link" ' + pageAttribute + '="' + i + '"></a>');
        } else {
          $pager = $('<a href="javascript:void(0);" class="tm-paging-link" ' + pageAttribute + '="' + i + '"></a>');
        }

        $pager.html(i);

        $pager.click(function() {
          $('.tm-paging-link').removeClass('active');
          $(this).addClass('active');
          var page = $(this).eq(0).attr(pageAttribute);
          showItems(page);
        });

        $pager.appendTo($('.tm-paging'));
      }
    }

    function showItems(currentPage) {
      for (let i = 0; i < galleryItems.length; i++) {
        galleryItems[i].classList.remove('show');
        galleryItems[i].classList.add('hide');

        if (i >= currentPage * itemsPerPage - itemsPerPage && i < currentPage * itemsPerPage) {
          galleryItems[i].classList.remove('hide');
          galleryItems[i].classList.add('show');
        }
      }
    }

    setPagination(1);
    showItems(1);

    $('.tm-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true,
      },
    });
  }, []);

  return (
    <div className="App">
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      <h1 className="tm-brand">
        <i className="fas fa-mountain fa-2x tm-brand-icon"></i>
        <span className="tm-brand-text">Vertex</span>
        hello
      </h1>
      {/* Rest of your HTML content goes here */}
    </div>
  );
};

export default App1;

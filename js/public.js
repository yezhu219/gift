$(function () {
  $('.tab').click(function () {
    $('.tab').removeClass('active')
    $(this).addClass('active')
  })
  $('.tab-login').click(function () {
    $('.login').show()
    $('.register').hide()
  })
  $('.tab-register').click(function () {
    $('.register').show()
    $('.login').hide()
  })
  $('.menu-item').click(function () {
    $('.menu-item').removeClass('active')
    $(this).addClass('active')
  })
  $('.menu-item-title').click(function () {
    $(this).parent('.menu-item-content').siblings('.menu-item-content').children('.menu-item-title').removeClass('active')
    $(this).parent('.menu-item-content').siblings('.menu-item-content').children('.sub-menu').hide()
    // $('.sub-menu').hide()
    $(this).siblings('.sub-menu').toggle()
    $(this).toggleClass('active')
  })
  $('.menu-item-sub').click(function () {
    $('.menu-item-sub').removeClass('active')
    $(this).addClass('active')
  })

  $('.tab-nav-item').click(function () {
    $('.tab-nav-item').removeClass('active')
    $(this).addClass('active')
  })

  $('#wearhouse p').click(function () {
    $('#wearhouse .m-select-option').toggle()
  })
  $('#wearhouse .m-select-item').click(function () {
    
    $('#wearhouse .holder').text($(this).text())
    $('#wearhouse .m-select-option').hide()
  })

  $('#gift-type p').click(function () {
    $('#gift-type .m-select-option').toggle()
  })
  $('#gift-type .m-select-item').click(function () {

    $('#gift-type .holder').text($(this).text())
    $('#gift-type .m-select-option').hide()
  })


  $('#express p').click(function () {
    $('#express .m-select-option').toggle()
  })
  $('#express .m-select-item').click(function () {

    $('#express .holder').text($(this).text())
    $('#express .m-select-option').hide()
  })

  $('.tab-upload-item').click(function () {
    $('.tab-upload-item').removeClass('active')
    $(this).addClass('active')
    let data = $(this).attr('type')
    console.log(data,'99')
    if (data == 1) {
      $('.upload-normal').show()
      $('.upload-many').hide()
    } else {
      $('.upload-normal').hide()
      $('.upload-many').show()
    }
  })


})
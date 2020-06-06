//event pada link
$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap element yg bersangkutan
	var elemenTujuan = $(tujuan);

	//Pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	});

	e.preventDefault();
});
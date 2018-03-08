//event saat link di klik

$('.page-scroll').on('click', function(e){
	
	//ambil isi h ref
	var tujuan = $(this).attr('href');

	//tangkap element ybs
	var elemenTujuan = $(tujuan);



	//pindahkan scroll
	$('body').scrollTop(elemenTujuan.offset().top);

	e.preventDefault();
});

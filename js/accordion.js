$(function()
{

// [.menu-acdn]にクリックイベントを設定する
$( '.menu-acdn' ).click( function(){

    // [data-target]の属性値を代入する
    var target = $(this).data( 'target' ) ;
    
    // [target]と同じ名前のIDを持つ要素に[slideToggle()]を実行する
    $( '#' + target ).slideToggle() ;
    
    		// 終了
		return false ;

} ) ;





} ) ;
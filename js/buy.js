/*
 * @author t@tabalt.net
 */

$(function(){
    setInterval(function(){
        Buyer.ShowPetsOnSale();
    }, 1200);

    Buyer.InitBuyModal();

    setInterval(function(){
        Buyer.TryBuyPets();
    }, 100);
});
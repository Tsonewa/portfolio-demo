/*Skills dropdown*/

document.getElementByClassName("title").each(function() {
    this.click(function(){ this.parent().find('.list').classList.toggle("list-active");
        this.classList.toggle("icon-rotate");
    });
});

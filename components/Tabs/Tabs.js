class Tabs {
    
    constructor() {
        let links = document.querySelectorAll( ".tabs-link" );
        
        links.forEach( ( link ) => {
            const tabLink = new TabLink( link );
            if( !Tabs.selectedLink ) {
                Tabs.selectedLink = tabLink;
            }
        } );
        
        
    };
    
    static tabClicked( tabLink ) {
        debugger;
        Tabs.selectedLink.deselect();
        Tabs.selectedLink = tabLink;
    }
    
}

class TabLink {
    constructor( element ) {
        // Assign this.element to the passed in DOM element
        // this.element;
        this.element = element;
        // Get the custom data attribute on the Link
        // this.data;
        this.data = this.element.dataset.tab;
        // Using the custom data attribute get the associated Item element
        // this.itemElement;
        this.itemElement =
            document.querySelector( ".tabs-items div[data-tab=\"" + this.data + "\"]" );
        // Using the Item element, create a new instance of the TabItem class
        // this.tabItem;
        this.tabItem = new TabItem( this.itemElement );
        // Add a click event listener on this instance, calling the select method on click
        this.element.addEventListener( "click", () => this.select() );
        debugger;
        
    };
    
    select() {
        debugger;
        // Add a class named "tabs-link-selected" to this link
        // this.element;
        this.element.classList.add( "tabs-link-selected" );
        
        // Call the select method on the item associated with this link
        this.tabItem.select();
        Tabs.tabClicked( this );
        
    }
    
    deselect() {
        // remove selected class
        this.element.classList.remove( "tabs-link-selected" );
        // remove selected from tab item.
        this.tabItem.deselect();
    }
}

class TabItem {
    constructor( element ) {
        // Assign this.element to the passed in element
        // this.element;
        this.element = element;
    }
    
    select() {
        // Select all ".tabs-item" elements from the DOM
        // const items;
        debugger;
        const items = document.querySelectorAll( ".tabs-item" );
        
        // Remove the class "tabs-item-selected" from each element
        items.forEach( ( item ) => {
            item.classList.remove( "tabs-item-selected" );
        } );
        
        // Add a class named "tabs-item-selected" to this element
        //this.element;
        this.element.classList.add( "tabs-item-selected" );
    }
    
    deselect() {
        this.element.classList.remove( "tabs-item-selected" );
    }
}

tabs = new Tabs();


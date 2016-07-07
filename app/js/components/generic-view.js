/***
 * Base view for all of the existing ones;
 * methods to be overridden when needed
 */
(function(Global) {

    Global.GenericView = {

        initialize: function() {
            this.template = Templates[this.name];
            this.rendered = false;
            this.init();
        },

        init: function () {},

        onRender: function() {},

        render: function() {

            /**
             * Prevent re-rendering of rendered views
             */
            if(!this.rendered) {

                if(!this.placeholder){
                    this.placeholder = document.getElementById(this.name + '-wrapper');
                }

                this.placeholder.innerHTML = this.template(app.model.data);
                this.rendered = true;
                this.onRender();
            }else {
                this.placeholder.style.display = 'block';
                console.info('show: not render - view ' + this.name); //@todo: remove
            }
        },

        /**
         * Close a persistent view without destroy
         */
        close: function () {},

        destroy: function() {
    
            /**
             * Prevent destruction of persistent views
             * persistent views must be destroyed manually
             */
            if(!this.persistent) {
                this.rendered = false;
                console.info('Destroyed: ' + this.name); //@todo: remove
            }
        }
    };

    Global.GenericView = _.extendOwn(Global.GenericView, Global.Initable);

})(window);

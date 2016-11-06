;(function (global, $){
    function greetr (f,l,lang){
        return new greetr.init(f,l,lang)
    }
    
    // methods/vars not exposed, can't be changed
    var langs = ['English', 'Spanish'];
    var greetings = {
        
        English: "Hello",
        Spanish: "Hola"
    };
    
    var formalgreetings = {
        
        English: "Good day",
        Spanish: "Saludos"
    };
    
    var logme = {
        English: "Logged in!",
        Spanish: "Inicio sesion!"
    
    }
    // end of methods/vars not exposed
    
    greetr.prototype ={
        msg: "",
        
        fullName: function(){
            return this.f + " " + this.l
        },
        validateLang: function(lang){
            return langs.indexOf(lang) ===-1 ? false : true
        },
        greeting: function(){
            return greetings[this.lang] + " " + this.fullName()
        },
        formalgreeting: function(){
            return formalgreetings[this.lang] + " " + this.fullName()
        },
        //greet () rt this
        greet: function(formal){
            if (formal === true){
                this.msg = this.formalgreeting();
            }else{
                this.msg = this.greeting();
            }
            return this
        },
        //log() rt this
        log: function(formal){
            if (formal === true){
                this.msg=this.formalgreeting();
            }else{
                this.msg=this.greeting();
            }
            console.log("msg:", formal, this.msg)
            return this
        },
        //setlang() rt this
        setLang: function(nlang){
            var oldlang = this.lang;
            if (this.validateLang(nlang)) {this.lang = nlang; console.log("lang set from", oldlang, "to", nlang)}
            else {console.log("new lang not valid")}
            return this
        },
        //use jquery to select
        shoGreetr: function(jqselector,formal){
            this.greet(formal);
            $(jqselector).html(this.msg)
            return this
        },
        shoLogMe: function(jqselector){
            this.msg = logme[this.lang]
            console.log(this.msg)
            $(jqselector).html(this.msg)
            return this
        },
    };
    
    greetr.init = function(f, l , lang){
        var self = this
        self.f = f || "some first name";
        self.l = l || "some last name";
        self.lang = lang || "English";
    }
    greetr.init.prototype =  greetr.prototype;
    
    global.G$  = global.greetr= greetr;
    
})(window, jQuery); 

//this frameworks works with a jquery selector
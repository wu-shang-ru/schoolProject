<template>
    <div class="Navbar">
        <b-navbar toggleable="lg" type="dark" variant="info">
            
            <b-navbar-nav class="nav-menu">
                <b-nav-item id="bar-links">
                    <a href="#">menu content</a>
                    <a href="#">menu content</a>
                    <a href="#">menu content</a>
                </b-nav-item>
                <b-nav-item class="icon" onclick="clickfunction()">
                    <font-awesome-icon icon="bars" size="lg"/>
                </b-nav-item>
            </b-navbar-nav>

            <b-navbar-brand href="#">Student Club for NTUB</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <!-- <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav> -->

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- Search Bar -->
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" id="search_box" value="Search"
                    onfocus="if(this.value='Search') this.value=''" onblur="if(this.value='') this.value='Search'">
                </b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 mr-5" type="submit">
                    <font-awesome-icon icon="search" size="lg"/>
                </b-button>
                </b-nav-form>

                <!-- Chat Button -->                
                <b-nav-item class="nav-item mr-2" href="#">
                    <font-awesome-icon icon="comment" size="lg"/>
                    <span class="nav-font">Chat</span>                   
                </b-nav-item>
                <!-- friend-list DropDown -->
                <b-nav-item-dropdown  right>
                <template v-slot:button-content>
                    <font-awesome-icon icon="user-friends" size="lg"/>
                    <span class="nav-font">Friends</span> 
                </template>
                <b-dropdown-item href="#">##</b-dropdown-item>
                <b-dropdown-item href="#">##</b-dropdown-item>
                <b-dropdown-item href="#">##</b-dropdown-item>
                <b-dropdown-item href="#">##</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- User DropDown -->
                <template v-slot:button-content>
                    <font-awesome-icon icon="user-circle" size="lg"/>
                    <span class="nav-font">User</span> 
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign in</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>

    </div>
</template>

<script>
    export default { 
    name: "Navbar",
    methods:{
        clickfunction: function(){
            var x = document.getElementById("bar-links");
            if (x.style.display =="none"){
                x.style.display = "block";
            }else{
                x.style.display = "none";
            }
        }
    }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Navbar {
    position: fixed;
    width:100%; 
    top:0px;   
}
#bar-links{
    display:none;
}
.nav-menu{
    margin-right:5px;
}
.nav-menu a{
    display:block;
}
.nav-menu a.icon{
    display:block;
    color:white;
}
</style>
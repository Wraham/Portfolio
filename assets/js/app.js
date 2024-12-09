const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classlist.remove("active");
    }
    for(tabcontents of tabcontents){
        tabcontent.classlist.remove("active-tab");
    }
     Event.currentTarget.classlist.add("active");
   document.getElementById(tabname).classlist.add("active");
}
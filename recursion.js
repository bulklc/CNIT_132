function rec_list_gen(level, maxlevel)

  {       
       
   var return_block = "";
   
   return_block = '<ul><li style=\"font-size:' + 3*level + 'px; color:rgb('
                 + return_rgb_value(level, maxlevel)[0] + ',' 
                 + return_rgb_value(level, maxlevel)[1] + ',' 
                 + return_rgb_value(level, maxlevel)[2] + ');\">' + level;
       
   const newlevel = level - 1
   
   if (newlevel >= 1) {
   
   return_block += rec_list_gen(newlevel, maxlevel);    
       
     }
     
   return return_block + '</li></ul>';     
       
   }
   
   
   
function return_rgb_value(level, maxlevel)


  {
  
  
   color_array = [];
   
   color_array[0] = 255 - Math.floor(255/maxlevel)*level;
   color_array[1] = 0;
   color_array[2] = Math.floor(255/maxlevel)*level;
   
   
   return color_array
 
  
   }

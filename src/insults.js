/**
    INSULTS ADD-ON
    @description This will be fun if I get it to work :)

    @author SKYE KYCHENTHAL
    @author Peddie Robotics
*/

/*
    INSULTS FUNCTION
    WILL SCROLL THROUGH A LIST OF INSULTS AT THE TOP OF THE SCREEN
    JUST FOR FUN
    */

    // let deliminator = '&nbsp;&nbsp;&nbsp;&nbsp;'

    // let insults = shuffle(config.INSULTS);
    // let insult_string = insults.join ('&')
    // let insult_index = 42;
    // let curr_string = insult_string.substring(0, insult_index);
    // curr_string = curr_string.replace('&', deliminator)
    // insult_index+=deliminator.length;

    // // Scrolls through insults
    // setInterval(() => {
    //     let latest_char = insult_string.charAt(insult_index)
    //     curr_string += latest_char

    //     if (latest_char == '&' ){ 
    //         curr_string += deliminator.substring(1)
    //     }

    //     if (curr_string.charAt(0) == '&'){ 
    //         curr_string = curr_string.substring (deliminator.length)
    //     }

    //     $(".insults").html(curr_string)
        
    //     curr_string = curr_string.substring(1)
        
    //     if (insult_index > insult_string.length + deliminator.length) {
    //         insult_index = deliminator.length;
    //         curr_string += deliminator;
    //     }

    //     insult_index+=1;

    // }, 1);
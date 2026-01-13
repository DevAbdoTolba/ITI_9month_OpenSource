public class Task3IPAddressSplitWithRegex{
    public static void main(String[] args){
        String word = null ,text = null;
        if(args.length == 0){
            word = "\\."; // or can be [.]
            text = "192.168.1.1";
        } else if(args.length == 1){
            System.out.println("Please provide both the word and the text.");
        } else {
            word = args[0];
            text = args[1];
        }
        
        if(text.matches("[1-9][0-9]{2}[.][1-9]?[0-9]{0,2}[.][1-9]?[0-9]{0,2}[.][1-9]?[0-9]{0,2}")){
            String[] textSplitted = text.split(word);
            for(int i = 0; i < textSplitted.length; i++){
                System.out.println(textSplitted[i]);    
            }
        } else {
            System.out.println("It is not a valid ip address!");
        }
    }
}

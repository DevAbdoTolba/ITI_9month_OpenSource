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
        
        String[] textSplitted = text.split(word);
        for(int i = 0; i < textSplitted.length; i++){
            System.out.println(textSplitted[i]);    
        }
    }
}

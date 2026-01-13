public class Task1CountWordsMethodSubString{
    public static void main(String[] args){
        String word = null ,text = null;
        int count = 0;
        if(args.length == 0){
            word = "ITI";
            text = "ITI develops people and ITI house of developers and ITI for";
        } else if(args.length == 1){
            System.out.println("Please provide both the word and the text.");
        } else {
            word = args[0];
            text = args[1];
        }

        String textSub = text;
        while(text.contains(word)){
            count++;
            textSub = text.substring(text.indexOf(word) + word.length());
        }
        System.out.println(count);
        
    }
}

// javac Task1CountWordsMethodSubString.java && java Task1CountWordsMethodSubString ITI "ITI develops people and ITI house of developers and ITI for"
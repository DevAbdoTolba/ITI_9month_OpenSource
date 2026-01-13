public class T1CountWordsMethod1{
    public static void main(String[] args){
        if(args.length == 0){
            System.out.println("No input provided.");
        } else if(args.length == 1){
            System.out.println("Please provide both the word and the text.");
        } else {

            String word = args[0];
            int count = 0;
            String text = args[1];

            while(text.contains(word)){
                count++;
                text = text.substring(text.indexOf(word) + word.length());
            }
            System.out.println(count);
        }
    }
}

// javac T1CountWordsMethod1.java && java T1CountWordsMethod1 ITI "ITI develops people and ITI house of developers and ITI for"
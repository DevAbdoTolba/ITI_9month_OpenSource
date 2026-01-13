public class T1CountWordsMethod2{
    public static void main(String[] args){
        if(args.length == 0){
            System.out.println("No input provided.");
        } else if(args.length == 1){
            System.out.println("Please provide both the word and the text.");
        } else {

            String word = args[0];
            String text = args[1];
            text = " " + text + " ";
            System.out.println((text.split(word).length) - 1);

        }
    }
}

// javac T1CountWordsMethod2.java && java T1CountWordsMethod2 ITI "ITI develops people and ITI house of developers and ITI for"
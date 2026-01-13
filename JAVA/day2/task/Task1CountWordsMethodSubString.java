public class T1CountWordsMethod1{
    public static void main(String[] args){
        String word,text;
        if(args.length == 0){
            String word = "ITI";
            String text = "ITI develops people and ITI house of developers and ITI for";
            text = " " + text + " ";
            System.out.println((text.split(word).length) - 1);
        } else if(args.length == 1){
            System.out.println("Please provide both the word and the text.");
        } else {
            String word = args[0];
            String text = args[1];
        }
        
        while(text.contains(word)){
            count++;
            text = text.substring(text.indexOf(word) + word.length());
        }
        System.out.println(count);
    }
}

// javac T1CountWordsMethod1.java && java T1CountWordsMethod1 ITI "ITI develops people and ITI house of developers and ITI for"
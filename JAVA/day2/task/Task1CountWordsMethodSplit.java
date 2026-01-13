public class Task1CountWordsMethodSplit{
    public static void main(String[] args){
        String word = null ,text = null;
        if(args.length == 0){
            word = " ";
            
            text = "ITI develops people and ITI house of developers and ITI for";
        } else if(args.length == 1){
            System.out.println("Please provide both the word and the text.");
        } else {
            word = args[0];
            text = args[1];
        }
        int count = 0;
        
        String[] textSplitted = text.split(word);
        
        for(int i = 0; i < textSplitted.length; i++){
            if(textSplitted[i].equals("ITI"))    
                count++;    
        }
        
        System.out.println(count);

    }
}

// javac Task1CountWordsMethodSplit.java && java Task1CountWordsMethodSplit ITI "ITI develops people and ITI house of developers and ITI for"
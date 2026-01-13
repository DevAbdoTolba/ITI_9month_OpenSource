import java.util.StringTokenizer;

public class Task2TokienizerDelimeter{
    public static void main(String[] args){
        StringTokenizer tokened = null;
        if(args.length == 0){
            String word = " ";
            String text = "ITI develops people and ITI house of developers and ITI for";
            tokened = new StringTokenizer(text, word);
        } else if(args.length == 1){
            System.out.println("Please provide both the word and the text.");
        } else {
            tokened = new StringTokenizer(args[1], args[0]);
        }
            int T = tokened.countTokens();
            while(T-- > 0){
                System.out.println(tokened.nextToken());
            }
    }
}

// javac Task2TokienizerDelimeter.java && java Task2TokienizerDelimeter : "hello:itsme:123123::asdasd"
// javac Task2TokienizerDelimeter.java && java Task2TokienizerDelimeter " " "ITI develops people and ITI house of developers and ITI for people"
import java.util.StringTokenizer;

public class T2TokienizerDelimeter{
    public static void main(String[] args){
        if(args.length == 0){
            System.out.println("No input provided.");
        } else if(args.length == 1){
            System.out.println("Please provide both the word and the text.");
        } else {

            StringTokenizer text = new StringTokenizer(args[1], args[0]);

            int T = text.countTokens();
            while(T-- > 0){
                System.out.println(text.nextToken());
            }
        }
    }
}

// javac T2TokienizerDelimeter.java && java T2TokienizerDelimeter : "hello:itsme:123123::asdasd"
// javac T2TokienizerDelimeter.java && java T2TokienizerDelimeter " " "ITI develops people and ITI house of developers and ITI for people"
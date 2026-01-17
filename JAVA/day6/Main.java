import java.util.stream.IntStream;
import staticmethod.StaticMethod;

public class Main{

    public static void main(String[] args){
        int[] values = {1,2,3,4,5,6,7,8};
        System.out.println(
            IntStream.of(values).min()
        );
        
    }

}
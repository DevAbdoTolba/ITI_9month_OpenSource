import java.util.function.BiPredicate;
import java.util.function.Predicate;
import java.lang.Character;

public class StringUtils{
    
    
    public static String betterString(String str1, String str2, BiPredicate<String, String> condition ){
        boolean stringFlagSelector = condition.test(str1,str2);
        return ( stringFlagSelector ? str1 : str2);
    }




    public static boolean isAlphabeticalString(String str1){
        
        Predicate<String> condition = (String s) -> {
                    boolean isAlphabetical = true ;
                    for(int i = 0; i < s.length(); i++){
                        if(!Character.isLetter(s.charAt(i))){
                            isAlphabetical = false;
                            break;
                        }
                    }
                    return isAlphabetical;
        };
        
        
        return condition.test(str1);
    }
    
}
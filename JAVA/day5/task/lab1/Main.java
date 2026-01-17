
public class Main{

    public static void main(String[] args){
        String str1 = "Tolba";
        String str2 = "Abdooooo";
        
        System.out.println(
            StringUtils.betterString(str1,str2, (s1,s2) -> s1.length() > s2.length())
        );
        System.out.println(
            StringUtils.betterString(str1,str2, (s1,s2) -> true)
        );
        
        String testAlphabetOnly = "HelloWorld2";
        System.out.println(
            StringUtils.isAlphabeticalString(testAlphabetOnly)
        );
        
    }

}
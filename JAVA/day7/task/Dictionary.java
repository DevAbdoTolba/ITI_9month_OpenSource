import java.util.TreeMap;
import java.util.TreeSet;
import java.lang.Character;

public class Dictionary{
    public TreeMap<Character,TreeSet<String>> dict; 
    
    public Dictionary() {
        this.dict = new TreeMap<>();
    }
    
    public static void main(String[] args){
        Dictionary englishDictionary = new Dictionary();
        englishDictionary.addWord("Tolba");
        englishDictionary.addWord("Tolbaa");
        englishDictionary.addWord("Tolbaaa");

        englishDictionary.addWord("aTolbaaa");
        englishDictionary.addWord("aTolbaaa");

        englishDictionary.addWord("Appel");
        englishDictionary.addWord("Apple");
                    
        englishDictionary.addWord("Engineer");
        englishDictionary.addWord("Engine");
        
        
        englishDictionary.printAllDictionary();
        englishDictionary.printByFirstLetter('T');
    }
    
    
    public boolean addWord(String word){
        String wordLowerCase = word.toLowerCase();
        Character firstLetter = wordLowerCase.charAt(0);
        dict.putIfAbsent(firstLetter, new TreeSet<>());
        return dict.get(firstLetter).add(wordLowerCase);
    }       
    
    public void printByFirstLetter(Character firstLetter){
        Character firstLetterLowerCase = Character.toLowerCase(firstLetter);
        if (!dict.containsKey(firstLetterLowerCase)) {
            System.out.println("No words found for: " + firstLetterLowerCase);
            return;
        }
        
        String result = "";
        result = result + "["+firstLetterLowerCase+"]:";
        result = result + dict.get(firstLetterLowerCase).toString();
        System.out.println(result);
        
    }
    
    public void printAllDictionary(){
        System.out.println(dict.toString());
    }
    
    @Override
    public String toString(){
        return dict.toString();
    } 


}
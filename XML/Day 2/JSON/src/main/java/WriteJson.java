import jakarta.json.bind.*;
import java.util.*;
import java.io.*;

class Root { public Library library; }
class Library { public String location, description, librarian; public List<Book> books; }
class Book { public String ISBN, title, Author, preface; public List<Part> part; }
class Part { public String title; public List<Chapter> chapter; }
class Chapter { public String title, summary; public List<String> section; }

public class WriteJson {
    public static void main(String[] args) throws Exception {
        Root r = new Root();
        r.library = new Library();
        r.library.location = "Lorem ipsum dolor";
        r.library.description = "Lorem ipsum";
        r.library.librarian = "Lorem";
        
        Book b1 = new Book();
        b1.ISBN = "123456789";
        b1.title = "Lorem ipsum dolor sit amet, consectetur";
        b1.Author = "Lorem ipsum";
        b1.preface = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        
        Chapter c1 = new Chapter(); c1.title="Lorem ipsum"; c1.summary=""; c1.section=Arrays.asList("","");
        Chapter c2 = new Chapter(); c2.title="Lorem ipsum"; c2.summary=""; c2.section=Arrays.asList("","");
        
        Part p1 = new Part(); p1.title="Lorem ipsum dolor sit amet, consectetur"; p1.chapter=Arrays.asList(c1,c2);
        Part p2 = new Part(); p2.title="Lorem ipsum dolor sit amet, consectetur"; p2.chapter=Arrays.asList(c1,c2);
        
        b1.part = Arrays.asList(p1,p2);
        
        Book b2 = new Book();
        b2.ISBN = "987654321";
        b2.title = b1.title; 
        b2.Author = b1.Author;
        b2.preface = b1.preface;
        b2.part = b1.part; 
        
        r.library.books = Arrays.asList(b1, b2);
        
        Jsonb j = JsonbBuilder.create();
        FileWriter fw = new FileWriter("lib.json");
        j.toJson(r, fw);
        fw.close();
        System.out.println("Written to lib.json easily..");
    }
}

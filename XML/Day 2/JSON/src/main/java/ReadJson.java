import jakarta.json.bind.*;
import java.io.*;

public class ReadJson {
    public static void main(String[] args) throws Exception {
        Jsonb j = JsonbBuilder.create();
        FileReader fr = new FileReader("lib.json");
        Root r = j.fromJson(fr, Root.class);
        fr.close();
        
        System.out.println("Reading library...");
        System.out.println("Location: " + r.library.location);
        System.out.println("Book 1 ISBN: " + r.library.books.get(0).ISBN);
        System.out.println("Done.");
    }
}

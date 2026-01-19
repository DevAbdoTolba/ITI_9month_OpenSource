import java.util.Date;
import java.awt.BorderLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;
import java.awt.FontMetrics;


public class Marquee extends JFrame implements Runnable{

        Thread th;
        JLabel textLabel = new JLabel();
        public int[] bounds = {500,500};
        String text = "Tolba :D";
        int textWidth;
        
        public Marquee(){
            this.setTitle("Marquee");
            
            textLabel.setHorizontalAlignment(JLabel.CENTER);
            textLabel.setText(text);
            FontMetrics fm = textLabel.getFontMetrics(textLabel.getFont());
            textWidth = fm.stringWidth(text);
            
            
            textLabel.setBounds(100, 100, textWidth, 50);
            textLabel.setLocation(0, 50);
            
            this.add(textLabel);
            
            

            
            th = new Thread(this);
            th.start();
        }
        
        public static void main(String[] args){
            Marquee app = new Marquee();
            app.setBounds(50,50,app.bounds[0],app.bounds[1]);
            app.setVisible(true);    
            
        }
        
        @Override
        public void run(){
            while(true){
                textLabel.setText("TOLBA :D");
                int x = textLabel.getX();
                int y = textLabel.getY();
                System.out.println(x);
               if (x > this.getWidth()/2) {
                    textLabel.setLocation(-(this.getWidth()/2), y);
                } else {
                    textLabel.setLocation(x + 5, y);
                }
                
                try {
                    Thread.sleep(100);
                } catch (Exception e) {
                    System.out.println(e);
                }
            }
        }
            
}
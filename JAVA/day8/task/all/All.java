import java.util.Date;
import java.awt.Color;
import java.awt.FontMetrics;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.ImageIcon;

public class All extends JFrame {

    JLabel textLabel = new JLabel();
    JLabel dateLabel = new JLabel();
    JLabel ballLabel = new JLabel(); 
    
    String text = "Tolba :D";
    int textWidth;

    public All() {
        this.setTitle("All");
        this.setLayout(null);
        this.setBounds(50, 50, 1000, 600);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);

        textLabel.setText(text);
        textLabel.setHorizontalAlignment(JLabel.CENTER);
        FontMetrics fm = textLabel.getFontMetrics(textLabel.getFont());
        textWidth = fm.stringWidth(text);
        textLabel.setBounds(0, 50, textWidth + 20, 50);
        this.add(textLabel);

        ballLabel.setIcon(new ImageIcon("ball.png")); 
        ballLabel.setBounds(0, 0, 50, 50);
        this.add(ballLabel);

        dateLabel.setHorizontalAlignment(JLabel.CENTER);
        dateLabel.setBounds(400, 20, 200, 50);
        this.add(dateLabel);
        
        new DateInner();
        new MarqueeInner();
        new BallInner();
        
        this.setVisible(true);
    }

    public static void main(String[] args) {
        new All();
    }

    class DateInner implements Runnable {
        Thread th;

        public DateInner() {
            th = new Thread(this);
            th.start();
        }

        @Override
        public void run() {
            while (true) {
                try {
                    Date d = new Date();
                    dateLabel.setText(d.toString());
                    Thread.sleep(1000);
                } catch (Exception e) {
                    System.out.println(e);
                }
            }
        }
    }

    class MarqueeInner implements Runnable {
        Thread th;

        public MarqueeInner() {
            th = new Thread(this);
            th.start();
        }

        @Override
        public void run() {
            while (true) {
                try {
                    int xMarquee = textLabel.getX();
                    int yMarquee = textLabel.getY();

                    // Accessing outer class getWidth()
                    if (xMarquee > All.this.getWidth()) {
                        textLabel.setLocation(0 - textWidth, yMarquee);
                    } else {
                        textLabel.setLocation(xMarquee + 5, yMarquee);
                    }
                    Thread.sleep(20);
                } catch (Exception e) {
                    System.out.println(e);
                }
            }
        }
    }

    
    class BallInner implements Runnable {
        Thread th;
        int xStep = 5;
        int yStep = 5;

        public BallInner() {
            th = new Thread(this);
            th.start();
        }

        @Override
        public void run() {
            while (true) {
                try {
                    int x = ballLabel.getX();
                    int y = ballLabel.getY();

                    x += xStep;
                    y += yStep;

                    // Note: We use All.this.getWidth() to get the frame size
                    if (x >= (All.this.getWidth() - 50) || x <= 0) {
                        xStep *= -1;
                    }

                    if (y >= (All.this.getHeight() - 80) || y <= 0) {
                        yStep *= -1;
                    }

                    ballLabel.setLocation(x, y);
                    Thread.sleep(10);
                } catch (Exception e) {
                    System.out.println(e);
                }
            }
        }
    }
}
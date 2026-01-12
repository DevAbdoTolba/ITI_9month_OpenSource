## Self study
All the topics required to be studied by Dr. Ahmed Lotfy




### Applet

>[!WARNING]
>It is deprecated and not safe

When we are in a website and in need of a complex logic. we create an Applet to download a program on the client machine to do that logic simply...


### Default values
>[!QUESTION] 
> Which would take a default value?
> Member variable (A vriable declared inside the scope of a class) or Local variable (A variable declared in a scope of a function or a block)?
> 

The behavior of JAVA is to set default value only to ==**Member functions**== but not to Local variables!
- **Member Variables:** Exist on the **Heap**. To ensure the integrity of the object, Java guarantees they start in a known state (zeroed out).
    
- **Local Variables:** Exist on the **Stack**. [For performance reasons](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html#:~:text=or%20any%20object), Java does not take the extra step to check out stack memory. It simply enforces that you define the value yourself to prevent bugs caused by reading accidental garbage data from memory.

### Strings

>[!QUESTION]
>IS IT IMMUTABLE?

YES...
[But you can change the value. for eg:](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)
```java[]
String str = "abc";
```

is equivalent to:
```java
char data[] = {'a', 'b', 'c'};
String str = new String(data);
```

Here are some more examples of how strings can be used:
```java
System.out.println("abc");
String cde = "cde";
System.out.println("abc" + cde);
String c = "abc".substring(2,3);
String d = cde.substring(1, 2);
```

>[!QUESTION]
>Using String functions how to split a line by a given delimiter?
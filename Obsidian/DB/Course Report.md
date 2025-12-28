# INSIGHTS

- File systems inevitably lead to data isolation chaos.
    
- Schemas decouple user views from physical disk storage.
    
- Distributed databases remove the single point of failure.
    
- Metadata describes structure while databases hold actual values.
    
- Three-tier architecture drastically lowers application maintenance costs.
    
- Weak entities vanish without their owner entity's existence.
    
- Foreign keys act as pointers linking related tables.
    
- Storing derived attributes usually hurts database performance.
    
- Ternary relationships flatten into tables using composite keys.
    
- Multi-valued attributes require separation into distinct child tables.
    

---

# RECURSIVE OUTLINE: Database Design and Implementation

This outline decomposes the lifecycle of creating a database system as presented in the course, focusing on the transition from conceptual understanding to technical implementation and coding.

- **Phase 1: Analysis and Requirement Gathering**
    
    - **Purpose:** Identify business needs and environment constraints before writing code.
        
    - **System Analyst Role**
        
        - Determine specific data requirements (e.g., "What characteristics or attributes... need to be recorded?").
            
        - Assess the environment:
            
            - Centralized: (Mainframe) Single point of failure, high traffic load.
                
            - Distributed: (Replication vs. Fragmentation) High availability.
                
            - Three-Tier (Internet Computing): Database Server <-> Application Server <-> Thin Client (Browser).
                
                - Technical Benefit: "Lower cost for support and maintenance" because logic is on the server, not 1000 client machines.
                    
- **Phase 2: Conceptual Design (ERD Modeling)**
    
    - **Purpose:** Create a high-level blueprint (Entity Relationship Diagram) independent of the specific DBMS software.
        
    - **Defining Entities**
        
        - **Strong Entities:** Have a unique identifier (PK).
            
            - Example: Employee, Department, Project.
                
        - **Weak Entities:** Cannot exist alone; rely on an Owner Entity.
            
            - Technical Rule: Must include the Owner's PK as a Foreign Key (FK) later.
                
            - Example: Dependent relies on Employee.
                
    - **Defining Attributes**
        
        - **Simple:** Maps to a single column (e.g., Salary).
            
        - **Composite:** Must be split into sub-parts.
            
            - Example: Address splits into Street and Zone.
                
        - **Multi-valued:** Cannot store multiple values in one cell.
            
            - Mapping Rule: Creates a new table.
                
            - Example: Phone numbers for an Employee.
                
        - **Derived:** Calculated from other data.
            
            - Technical Insight: "It creates a headache on the database" to store these; usually calculated on the fly (e.g., Age from DOB).
                
    - **Defining Relationships**
        
        - **Cardinality:** 1:1, 1:N, M:N.
            
        - **Participation:** Mandatory (Must) vs. Optional (May).
            
        - **Degree:** Binary (2 entities), Unary (Recursive), Ternary (3 entities).
            
- **Phase 3: Logical Design (Mapping to Relational Schema)**
    
    - **Purpose:** Transform the ERD into a set of Tables (Relations) and Foreign Keys.
        
    - **Mapping Regular Entities**
        
        - Create a table for the entity.
            
        - Choose the Primary Key (PK).
            
    - **Mapping Weak Entities**
        
        - Create table.
            
        - Add Owner's PK as a Foreign Key (FK).
            
        - PK of new table: Combination of Owner FK + Partial Key.
            
    - **Mapping 1:N Relationships**
        
        - **Rule:** Take PK from the "1" side and add as FK to the "N" side.
            
        - Example: Department (1) has Employees (N). Add DNumber to Employee table.
            
    - **Mapping M:N Relationships**
        
        - **Rule:** Create a new "Link" table.
            
        - **Columns:** PK of Entity A + PK of Entity B + Relationship Attributes.
            
        - Example: Work_On table links Employee and Project.
            
    - **Mapping 1:1 Relationships**
        
        - **Scenario (Must/Must):** Merge into one table.
            
        - **Scenario (May/Must):** Take PK from "May" side to "Must" side.
            
    - **Mapping Ternary Relationships**
        
        - **Rule:** Create a new table containing PKs of all three participating entities.
            
        - Example: Skills_Used table contains SSN, PNO, Skill_ID.
            
- **Phase 4: Physical Design & Implementation (SQL)**
    
    - **Purpose:** Writing the actual code to build the structure and manipulate data.
        
    - **Data Definition Language (DDL)**
        
        - **CREATE:** Defines the table structure, columns, data types, and constraints.
            
            - Syntax: CREATE TABLE Students (ID NUMBER PRIMARY KEY...)
                
        - **ALTER:** Modifies existing structure.
            
            - Add Column: ALTER TABLE students ADD postal_code number
                
            - Drop Column: ALTER TABLE students DROP COLUMN country
                
        - **DROP:** Deletes the table and data entirely.
            
            - Syntax: DROP TABLE students
                
    - **Data Control Language (DCL)**
        
        - **GRANT:** Gives privileges.
            
            - Syntax: GRANT SELECT ON TABLE employees TO Ahmed
                
            - Advanced: WITH GRANT OPTION (allows Ahmed to grant rights to others).
                
        - **REVOKE:** Removes privileges.
            
            - Syntax: REVOKE UPDATE ON TABLE department FROM Mary
                
    - **Constraints Implementation**
        
        - **Primary Key:** NOT NULL + UNIQUE.
            
        - **Foreign Key (Referential Integrity):** Ensures child records point to existing parent records.
            
            - Constraint: Cannot delete a Parent record (e.g., Department) if Child records (Employees) still reference it.
                
        - **Check Constraint:** Validates data range (e.g., Salary must be between 1000 and 12000).
            

---

# GENERATED SQL EXAMPLES

Based on the "Company" database example discussed extensively in the logical design and mapping chapters, here are the SQL scripts to generate the schema and populate it with data.

### 1. Department Table (Parent Table)

From the mapping of the 'Department' entity.

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Department (     DNumber INT PRIMARY KEY,     DName VARCHAR(50) NOT NULL,     Location VARCHAR(50),     MgrSSN INT, -- Foreign Key added later or during creation if Employee exists     MgrStartDate DATE );  INSERT INTO Department VALUES (10, 'Finance', 'Cairo', NULL, '2020-01-01'); INSERT INTO Department VALUES (20, 'HR', 'Alexandria', NULL, '2019-05-15'); INSERT INTO Department VALUES (30, 'IT', 'Giza', NULL, '2021-03-10'); INSERT INTO Department VALUES (40, 'Sales', 'Cairo', NULL, '2018-11-01');`
  

### 2. Employee Table

Includes the recursive relationship (SuperSSN) and the 1:N relationship with Department (DNO).

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Employee (     SSN INT PRIMARY KEY,     FName VARCHAR(50),     LName VARCHAR(50),     Salary DECIMAL(10, 2),     BDate DATE,     Address_Street VARCHAR(100), -- Composite attribute mapping     Address_Zone VARCHAR(50),    -- Composite attribute mapping     SuperSSN INT,                -- Recursive Relationship     DNO INT,                     -- Foreign Key from Department (1:N)     FOREIGN KEY (DNO) REFERENCES Department(DNumber),     FOREIGN KEY (SuperSSN) REFERENCES Employee(SSN) );  -- Inserting Supervisors first INSERT INTO Employee VALUES (100, 'Ahmed', 'Ali', 12000, '1980-01-01', 'Main St', 'Zone 1', NULL, 30); INSERT INTO Employee VALUES (200, 'Sarah', 'Nabil', 11000, '1985-04-12', 'Nile St', 'Zone 2', NULL, 10);  -- Inserting Employees managed by above INSERT INTO Employee VALUES (101, 'Mohamed', 'Salah', 8000, '1990-06-15', 'Pyramid St', 'Zone 1', 100, 30); INSERT INTO Employee VALUES (102, 'Mona', 'Zaki', 8500, '1992-08-20', 'Opera Sq', 'Zone 3', 100, 30); INSERT INTO Employee VALUES (201, 'Hassan', 'Youssef', 7000, '1995-12-01', 'Sea Rd', 'Zone 2', 200, 10);`
  

### 3. Employee_Phone (Multi-valued Attribute)

Mapped to a separate table as per the "Multi-valued attribute" rule.

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Employee_Phone (     EmpSSN INT,     PhoneNumber VARCHAR(15),     PRIMARY KEY (EmpSSN, PhoneNumber),     FOREIGN KEY (EmpSSN) REFERENCES Employee(SSN) );  INSERT INTO Employee_Phone VALUES (100, '01012345678'); INSERT INTO Employee_Phone VALUES (100, '0223456789'); -- Landline INSERT INTO Employee_Phone VALUES (101, '01198765432'); INSERT INTO Employee_Phone VALUES (200, '01255555555'); INSERT INTO Employee_Phone VALUES (102, '01511122233');`
  

### 4. Project Table

Regular Entity.

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Project (     PNumber INT PRIMARY KEY,     PName VARCHAR(50) NOT NULL,     Location VARCHAR(50) );  INSERT INTO Project VALUES (1, 'Website Revamp', 'Giza'); INSERT INTO Project VALUES (2, 'New Recruitment', 'Alexandria'); INSERT INTO Project VALUES (3, 'Audit 2023', 'Cairo'); INSERT INTO Project VALUES (4, 'Mobile App', 'Giza');`
  

### 5. Work_On (M:N Relationship)

Link table between Employee and Project.

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Work_On (     EmpSSN INT,     PNumber INT,     Hours INT, -- Attribute on the relationship     PRIMARY KEY (EmpSSN, PNumber),     FOREIGN KEY (EmpSSN) REFERENCES Employee(SSN),     FOREIGN KEY (PNumber) REFERENCES Project(PNumber) );  INSERT INTO Work_On VALUES (100, 1, 10); INSERT INTO Work_On VALUES (100, 4, 20); INSERT INTO Work_On VALUES (101, 1, 40); INSERT INTO Work_On VALUES (200, 2, 15); INSERT INTO Work_On VALUES (201, 3, 35);`
  

### 6. Dependent (Weak Entity)

Relies on Employee. PK is composite.

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Dependent (     EmpSSN INT,     DependentName VARCHAR(50),     Relation VARCHAR(50),     PRIMARY KEY (EmpSSN, DependentName),     FOREIGN KEY (EmpSSN) REFERENCES Employee(SSN) ON DELETE CASCADE );  INSERT INTO Dependent VALUES (100, 'Omar', 'Son'); INSERT INTO Dependent VALUES (100, 'Laila', 'Daughter'); INSERT INTO Dependent VALUES (200, 'Youssef', 'Husband'); INSERT INTO Dependent VALUES (102, 'Hoda', 'Mother');`
  

### 7. Car (1:1 Relationship with Employee)

Participation is May/May, mapped by adding FK to Car table.

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Car (     PlateNumber VARCHAR(10) PRIMARY KEY,     Model VARCHAR(50),     Color VARCHAR(20),     OwnerSSN INT UNIQUE, -- Unique because it is 1:1     FOREIGN KEY (OwnerSSN) REFERENCES Employee(SSN) );  INSERT INTO Car VALUES ('ABC-123', 'Toyota', 'Red', 100); INSERT INTO Car VALUES ('XYZ-999', 'Hyundai', 'Blue', 200); INSERT INTO Car VALUES ('DEF-456', 'Kia', 'Black', 101);`
  

### 8. Contract (1:1 Relationship - Must/Must)

Since participation is Must/Must, this is often merged into the Employee table, but if kept separate per the "Contract" entity slide:

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Contract (     ContractID INT PRIMARY KEY,     EmpSSN INT UNIQUE NOT NULL, -- Must exist for every contract     Type VARCHAR(20),     StartDate DATE,     FOREIGN KEY (EmpSSN) REFERENCES Employee(SSN) );  INSERT INTO Contract VALUES (5001, 100, 'Full-Time', '2010-01-01'); INSERT INTO Contract VALUES (5002, 101, 'Part-Time', '2022-06-01'); INSERT INTO Contract VALUES (5003, 200, 'Full-Time', '2015-03-15');`
  

### 9. Skill (For Ternary Relationship)

code SQL

downloadcontent_copy

expand_more

    `CREATE TABLE Skill (     SkillID INT PRIMARY KEY,     SkillName VARCHAR(50) );  INSERT INTO Skill VALUES (1, 'Java'); INSERT INTO Skill VALUES (2, 'Accounting'); INSERT INTO Skill VALUES (3, 'Public Speaking'); INSERT INTO Skill VALUES (4, 'SQL');`
  

### 10. Skills_Used (Ternary Relationship Mapping)

Links Employee, Project, and Skill.

code SQL

downloadcontent_copy

expand_more

    `CREATE TABLE Skills_Used (     EmpSSN INT,     PNumber INT,     SkillID INT,     UsageDescription VARCHAR(100),     PRIMARY KEY (EmpSSN, PNumber, SkillID),     FOREIGN KEY (EmpSSN) REFERENCES Employee(SSN),     FOREIGN KEY (PNumber) REFERENCES Project(PNumber),     FOREIGN KEY (SkillID) REFERENCES Skill(SkillID) );  INSERT INTO Skills_Used VALUES (100, 1, 1, 'Backend Development'); INSERT INTO Skills_Used VALUES (101, 1, 4, 'Database Design'); INSERT INTO Skills_Used VALUES (200, 2, 3, 'Interviewing'); INSERT INTO Skills_Used VALUES (201, 3, 2, 'Financial Audit');`





Here are the insights, recursive outline, and SQL exports based on the video content provided.

### INSIGHTS

- Update without condition modifies every single table record.
    
- Indexes speed up reading but slow down writing.
    
- Truncate resets storage instantly while Delete logs everything.
    
- Views are logical windows holding no actual data.
    
- Aggregate functions calculate data while ignoring null values.
    
- Where filters rows; Having filters aggregated group data.
    
- Self joins require table aliases to prevent ambiguity.
    
- Normalization tests certify database design goodness and health.
    
- Third Normal Form eliminates indirect, transitive data dependencies.
    
- Inner joins exclude records with no matching values.
    

---

### RECURSIVE OUTLINE: SQL DML, Design, and Optimization

- **1. Data Manipulation Language (DML) Operations**
    
    - **1.1. Updating Existing Data (UPDATE)**
        
        - **Purpose:** Modify existing records in a table based on specific criteria.
            
        - **Syntax and Logic:**
            
            - Use UPDATE table_name SET column = value WHERE condition.
                
            - Quote: "If I stopped here without a condition, it means I want to update the Salary column for all employees."
                
        - **Coding Examples:**
            
            - **Single Column Update:**
                
                code SQL
                
                downloadcontent_copy
                
                expand_less
                
                    `UPDATE employee SET salary = 1200 WHERE SSN = 102661;`
                  
                
            - **Multi-Column Update:**
                
                code SQL
                
                downloadcontent_copy
                
                expand_less
                
                    `UPDATE employee SET salary = 1700, dno = 10 WHERE ssn = 102674;`
                  
                
    - **1.2. Inserting Data (INSERT)**
        
        - **Purpose:** Add new records to the database.
            
        - **Methods:**
            
            - **Full Column Insert:** Omitting column names implies insertion into all columns in order.
                
                code SQL
                
                downloadcontent_copy
                
                expand_less
                
                    `INSERT INTO employee VALUES ('Ahmed', 'Hassan', '102672', '8/8/1988', ...);`
                  
                
            - **Specific Column Insert:** Specifying columns allows skipping nullables or reordering.
                
                code SQL
                
                downloadcontent_copy
                
                expand_less
                
                    `INSERT INTO employee (Fname, Lname, SSN) VALUES ('Moheb', 'Rafaat', '102674');`
                  
                
    - **1.3. Deleting Data (DELETE vs TRUNCATE)**
        
        - **Purpose:** Removing records from tables.
            
        - **DELETE:**
            
            - Can use WHERE clause to remove specific rows.
                
            - Slower because it logs the deletion of every row.
                
            - Can be rolled back.
                
            - Example:
                
                code SQL
                
                downloadcontent_copy
                
                expand_less
                
                    `DELETE FROM employee WHERE ssn = 102672;`
                  
                
        - **TRUNCATE:**
            
            - Removes all data instantly.
                
            - Resets the table structure storage but keeps the schema.
                
            - Quote: "Truncate cannot be rolled back because it is a DDL statement... it creates an auto-commit."
                
- **2. Data Retrieval (SELECT)**
    
    - **2.1. Basic Selection and Filtering**
        
        - **Purpose:** Retrieve specific data points.
            
        - **Filtering with WHERE:**
            
            - **Exact Match:** WHERE ssn = 102672
                
            - **Pattern Matching (LIKE):**
                
                - Used when exact value is unknown.
                    
                - Example: Finding names with 'o' as the second letter.
                    
                - code SQL
                    
                    downloadcontent_copy
                    
                    expand_less
                    
                
                SELECT * FROM employee WHERE fname LIKE '?o*';  
                -- Note: Video uses Access syntax (?/*), Standard SQL uses (_/%)
                
                code Code
                
                downloadcontent_copy
                
                expand_less
                
            - **Range Filtering:**
                
                - Using logical operators (AND, OR) or BETWEEN.
                    
                - code SQL
                    
                    downloadcontent_copy
                    
                    expand_less
                    
                
                SELECT * FROM employee  
                WHERE salary BETWEEN 1500 AND 2500;
                
                code Code
                
                downloadcontent_copy
                
                expand_less
                
            - **List Filtering (IN):**
                
                - Example: Finding employees with specific Supervisors.
                    
                - code SQL
                    
                    downloadcontent_copy
                    
                    expand_less
                    
                
                SELECT SSN, Fname FROM employee  
                WHERE superssn IN (321654, 223344);
                
                code Code
                
                downloadcontent_copy
                
                expand_less
                
    - **2.2. Ordering Results**
        
        - **Purpose:** Sorting the result set.
            
        - **Syntax:** ORDER BY column_name [ASC|DESC].
            
        - **Multi-level Sorting:**
            
            code SQL
            
            downloadcontent_copy
            
            expand_less
            
                `SELECT * FROM employee ORDER BY dno ASC, salary DESC;`
              
            
            - Explanation: Sorts by department first, then by salary highest-to-lowest within that department.
                
    - **2.3. Aggregate Functions and Grouping**
        
        - **Purpose:** Perform calculations on sets of rows.
            
        - **Functions:** MAX, MIN, COUNT, AVG.
            
        - Quote: "Aggregate functions ignore the null."
            
        - **Grouping (GROUP BY):**
            
            - Divides data into "chunks" based on a column.
                
            - Example: Average salary per department.
                
                code SQL
                
                downloadcontent_copy
                
                expand_less
                
                    `SELECT AVG(salary) FROM employee GROUP BY dno;`
                  
                
        - **Filtering Groups (HAVING):**
            
            - Used to filter after aggregation (unlike WHERE).
                
            - Example: Departments where max salary > 1800.
                
                code SQL
                
                downloadcontent_copy
                
                expand_less
                
                    `SELECT dno, MAX(salary) FROM employee GROUP BY dno HAVING MAX(salary) > 1800;`
                  
                
- **3. Advanced Retrieval: Joins**
    
    - **3.1. Inner Join / Equi-Join**
        
        - **Purpose:** Retrieve data from multiple tables where a match exists in both.
            
        - **Mechanism:** Links Primary Key to Foreign Key.
            
        - Example: Displaying Employee Name and Department Name.
            
            code SQL
            
            downloadcontent_copy
            
            expand_less
            
                `SELECT Fname, Dname FROM employee, departments WHERE employee.dno = departments.dno;`
              
            
    - **3.2. Outer Joins**
        
        - **Left Outer Join:** Returns all rows from the left table, even if no match in the right.
            
        - **Right Outer Join:** Returns all rows from the right table (e.g., Departments with no employees).
            
        - **Full Outer Join:** Returns all rows when there is a match in either table.
            
    - **3.3. Self Join**
        
        - **Purpose:** Joining a table to itself (Recursive Relationship).
            
        - **Technique:** Must use aliases to treat the table as two separate instances.
            
        - Example: Listing an Employee and their Supervisor (both are in Employee table).
            
            code SQL
            
            downloadcontent_copy
            
            expand_less
            
                `SELECT e.Fname as Employee, s.Fname as Supervisor FROM employee e, employee s WHERE e.superssn = s.ssn;`
              
            
- **4. Database Design: Normalization**
    
    - **Purpose:** Decomposing "bad" relations to minimize redundancy and anomalies (Insert, Update, Delete).
        
    - **4.1. First Normal Form (1NF)**
        
        - **Rule:** No multivalued attributes, no repeating groups, no composite attributes.
            
        - **Action:** Move multivalued data (e.g., Phone Numbers) to a new table with a Composite Primary Key.
            
    - **4.2. Second Normal Form (2NF)**
        
        - **Rule:** Must be in 1NF + No Partial Dependencies.
            
        - **Definition:** Non-key attributes must depend on the whole primary key, not just part of it.
            
        - **Action:** If a field depends only on part of a composite key, move it to a separate table.
            
    - **4.3. Third Normal Form (3NF)**
        
        - **Rule:** Must be in 2NF + No Transitive Dependencies.
            
        - **Definition:** Non-key attributes should not depend on other non-key attributes.
            
        - **Action:** Move the transitive dependency (e.g., City depending on ZipCode which depends on ID) to a lookup table.
            
- **5. Optimization Objects: Indexes and Views**
    
    - **5.1. Indexes**
        
        - **Purpose:** Speed up data retrieval based on specific search conditions.
            
        - **Mechanism:** Creates a sorted pointer structure to physical data (avoids "Full Table Scan").
            
        - **Trade-off:** Speeds up SELECT but causes overhead on INSERT, UPDATE, DELETE (because index must be rebuilt).
            
        - **Syntax:**
            
            code SQL
            
            downloadcontent_copy
            
            expand_less
            
                `CREATE INDEX index_name ON table_name (column_name);`
              
            
    - **5.2. Views**
        
        - **Purpose:** A "logical table" or saved query. Contains no data of its own.
            
        - **Benefits:**
            
            1. Restricts data access (security).
                
            2. Simplifies complex queries.
                
            3. Provides data independence.
                
        - **Syntax:**
            
            code SQL
            
            downloadcontent_copy
            
            expand_less
            
                `CREATE VIEW view_name AS SELECT columns FROM tables WHERE condition;`
              
            
        - **Check Option:** WITH CHECK OPTION ensures that DML performed against the view adheres to the view's WHERE clause.
            

---

### SQL TABLE EXPORTS

Below are the SQL queries to generate the tables discussed in the course, populated with data extracted from the examples.

#### 1. Table: Departments

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Departments (     Dname VARCHAR(50),     Dnumber INT PRIMARY KEY,     MGRSSN INT,     MGRStart_Date DATE );  INSERT INTO Departments (Dname, Dnumber, MGRSSN, MGRStart_Date) VALUES ('Research', 5, 333445555, '1988-05-22'); INSERT INTO Departments (Dname, Dnumber, MGRSSN, MGRStart_Date) VALUES ('Administration', 4, 987654321, '1995-01-01'); INSERT INTO Departments (Dname, Dnumber, MGRSSN, MGRStart_Date) VALUES ('Headquarters', 1, 888665555, '1981-06-19'); INSERT INTO Departments (Dname, Dnumber, MGRSSN, MGRStart_Date) VALUES ('DP1', 10, 223344, '2005-01-01'); INSERT INTO Departments (Dname, Dnumber, MGRSSN, MGRStart_Date) VALUES ('DP2', 20, 968574, '2006-01-03'); INSERT INTO Departments (Dname, Dnumber, MGRSSN, MGRStart_Date) VALUES ('DP3', 30, 512463, '2006-01-03');`
  

#### 2. Table: Employee

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Employee (     Fname VARCHAR(50),     Lname VARCHAR(50),     SSN INT PRIMARY KEY,     Bdate DATE,     Address VARCHAR(100),     Sex CHAR(1),     Salary INT,     Superssn INT,     Dno INT,     FOREIGN KEY (Dno) REFERENCES Departments(Dnumber) );  INSERT INTO Employee VALUES ('John', 'Smith', 123456789, '1965-01-09', '731 Fondren, Houston, TX', 'M', 30000, 333445555, 5); INSERT INTO Employee VALUES ('Franklin', 'Wong', 333445555, '1955-12-08', '638 Voss, Houston, TX', 'M', 40000, 888665555, 5); INSERT INTO Employee VALUES ('Alicia', 'Zelaya', 999887777, '1968-01-19', '3321 Castle, Spring, TX', 'F', 25000, 987654321, 4); INSERT INTO Employee VALUES ('Jennifer', 'Wallace', 987654321, '1941-06-20', '291 Berry, Bellaire, TX', 'F', 43000, 888665555, 4); INSERT INTO Employee VALUES ('Ramesh', 'Narayan', 666884444, '1962-09-15', '975 FireOak, Humble, TX', 'M', 38000, 333445555, 5); INSERT INTO Employee VALUES ('Joyce', 'English', 453453453, '1972-07-31', '5631 Rice, Houston, TX', 'F', 25000, 333445555, 5); INSERT INTO Employee VALUES ('Ahmed', 'Ali', 102661, '1985-10-18', '20 El-haram St, Giza', 'M', 1200, 223344, 10); INSERT INTO Employee VALUES ('Moheb', 'Rafaat', 102674, '1984-05-06', '6 Makram Ebid St', 'M', 1600, 102674, 30); INSERT INTO Employee VALUES ('Kamel', 'Mohamed', 223344, '1970-10-15', '38 Mohy el dien abo el Ezz', 'M', 1800, 321654, 10); INSERT INTO Employee VALUES ('Hanaa', 'Sobhy', 123456, '1973-08-25', '38 Abdel Khalik Tharwat', 'F', 800, 223344, 10);`
  

#### 3. Table: Project

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Project (     Pname VARCHAR(50),     Pnumber INT PRIMARY KEY,     Plocation VARCHAR(50),     Dnum INT,     FOREIGN KEY (Dnum) REFERENCES Departments(Dnumber) );  INSERT INTO Project (Pname, Pnumber, Plocation, Dnum) VALUES ('ProductX', 1, 'Bellaire', 5); INSERT INTO Project (Pname, Pnumber, Plocation, Dnum) VALUES ('ProductY', 2, 'Sugarland', 5); INSERT INTO Project (Pname, Pnumber, Plocation, Dnum) VALUES ('ProductZ', 3, 'Houston', 5); INSERT INTO Project (Pname, Pnumber, Plocation, Dnum) VALUES ('Computerization', 10, 'Stafford', 4); INSERT INTO Project (Pname, Pnumber, Plocation, Dnum) VALUES ('Reorganization', 20, 'Houston', 1); INSERT INTO Project (Pname, Pnumber, Plocation, Dnum) VALUES ('Newbenefits', 30, 'Stafford', 4);`
  

#### 4. Table: Works_on

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Works_on (     ESSN INT,     PNO INT,     Hours DECIMAL(3,1),     PRIMARY KEY (ESSN, PNO),     FOREIGN KEY (ESSN) REFERENCES Employee(SSN),     FOREIGN KEY (PNO) REFERENCES Project(Pnumber) );  INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (123456789, 1, 32.5); INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (123456789, 2, 7.5); INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (666884444, 3, 40.0); INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (453453453, 1, 20.0); INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (453453453, 2, 20.0); INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (333445555, 2, 10.0); INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (333445555, 3, 10.0); INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (333445555, 10, 10.0); INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (333445555, 20, 10.0); INSERT INTO Works_on (ESSN, PNO, Hours) VALUES (999887777, 30, 30.0);`
  

#### 5. Table: Dependent

code SQL

downloadcontent_copy

expand_less

    `CREATE TABLE Dependent (     ESSN INT,     Dependent_name VARCHAR(50),     Sex CHAR(1),     Bdate DATE,     Relationship VARCHAR(50),     PRIMARY KEY (ESSN, Dependent_name),     FOREIGN KEY (ESSN) REFERENCES Employee(SSN) );  INSERT INTO Dependent (ESSN, Dependent_name, Sex, Bdate, Relationship) VALUES (333445555, 'Alice', 'F', '1986-04-05', 'Daughter'); INSERT INTO Dependent (ESSN, Dependent_name, Sex, Bdate, Relationship) VALUES (333445555, 'Theodore', 'M', '1983-10-25', 'Son'); INSERT INTO Dependent (ESSN, Dependent_name, Sex, Bdate, Relationship) VALUES (333445555, 'Joy', 'F', '1958-05-03', 'Spouse'); INSERT INTO Dependent (ESSN, Dependent_name, Sex, Bdate, Relationship) VALUES (987654321, 'Abner', 'M', '1942-02-28', 'Spouse'); INSERT INTO Dependent (ESSN, Dependent_name, Sex, Bdate, Relationship) VALUES (123456789, 'Michael', 'M', '1988-01-04', 'Son'); INSERT INTO Dependent (ESSN, Dependent_name, Sex, Bdate, Relationship) VALUES (123456789, 'Alice', 'F', '1988-12-30', 'Daughter'); INSERT INTO Dependent (ESSN, Dependent_name, Sex, Bdate, Relationship) VALUES (123456789, 'Elizabeth', 'F', '1967-05-05', 'Spouse');`
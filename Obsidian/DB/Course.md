# Chapter 1: Analysis and Requirement Gathering

### Purpose

To identify business needs and environmental constraints before any code is written.

### Key Concept

The System Analyst Role & Environment Assessment

The analyst must determine specific data requirements (attributes/characteristics) and assess the architecture:

- **Centralized (Mainframe):** Single point of failure, high load.
    
- **Distributed:** Uses replication or fragmentation for high availability.
    
- **Three-Tier (Internet Computing):** Database Server $\leftrightarrow$ Application Server $\leftrightarrow$ Thin Client (Browser).
    

### Insights (Notes)

> [!NOTE] Architecture Insight
> 
> - **Distributed databases** remove the single point of failure.
>     
> - **Three-tier architecture** drastically lowers application maintenance costs because logic resides on the server, not on 1,000 client machines.
>     

### Real-Life Case Scenario

- **Centralized vs. Distributed:** Choosing between a Mainframe environment that risks a single point of failure versus a Distributed system using replication/fragmentation for high availability.
    
- **Support Costs:** Moving from client-heavy software to a browser-based thin client to avoid updating software on individual machines.
    

---

# Chapter 2: Conceptual Design (ERD Modeling)

### Purpose

To create a high-level blueprint (Entity Relationship Diagram) that is independent of specific DBMS software.

### Key Concept

**Defining Entities and Attributes**

- **Strong Entities:** Have a unique identifier (PK) (e.g., Employee).
    
- **Weak Entities:** Rely on an Owner Entity and cannot exist alone.
    
- **Attributes:**
    
    - _Composite:_ Must be split (e.g., Address $\rightarrow$ Street, Zone).
        
    - _Multi-valued:_ Cannot store multiple values in one cell; creates a new table.
        
    - _Derived:_ Calculated from other data (e.g., Age from DOB).
        

### Insights (Notes)

> [!NOTE] Modeling Rules
> 
> - **Weak entities** vanish without their owner entity's existence.
>     
> - **Storing derived attributes** usually hurts database performance; they create a "headache" and should be calculated on the fly.
>     

### Real-Life Case Scenario

- **Weak Entity:** A `Dependent` (like a child or spouse) relies entirely on the existence of an `Employee`.
    
- **Composite Attribute:** An `Address` field is not stored as one string but split into `Street` and `Zone`.
    

---

# Chapter 3: Logical Design (Mapping to Schema)

### Purpose

To transform the ERD into a set of Tables (Relations) and Foreign Keys.

### Key Concept

**Mapping Rules**

- **1:N Relationship:** Take the PK from the "1" side and add it as an FK to the "N" side.
    
- **M:N Relationship:** Create a new "Link" table containing PKs of both entities.
    
- **Ternary Relationship:** Flatten into a single table using composite keys of all three entities.
    
- **Multi-valued Attributes:** Separate into distinct child tables.
    

### Insights (Notes)

> [!NOTE] Relationship Mechanics
> 
> - **Schemas** decouple user views from physical disk storage.
>     
> - **Foreign keys** act as pointers linking related tables.
>     
> - **Ternary relationships** flatten into tables using composite keys.
>     
> - **Multi-valued attributes** require separation into distinct child tables.
>     

### Code / SQL Examples

**Mapping an M:N Relationship (Employee & Project):**

SQL

```
CREATE TABLE Work_On (
     EmpSSN INT,
     PNumber INT,
     Hours INT, -- Attribute on the relationship
     PRIMARY KEY (EmpSSN, PNumber),
     FOREIGN KEY (EmpSSN) REFERENCES Employee(SSN),
     FOREIGN KEY (PNumber) REFERENCES Project(PNumber)
);
```

### Real-Life Case Scenario

- **1:N Mapping:** A `Department` has many `Employees`. The `Department` number (DNumber) is added to the `Employee` table as a foreign key.
    
- **M:N Mapping:** An `Employee` works on many `Projects`, and a `Project` has many `Employees`. This creates the `Work_On` table.
    

---

# Chapter 4: Physical Design & Implementation (DDL)

### Purpose

Writing the actual code to build the structure (tables, constraints) and control access.

### Key Concept

**Data Definition Language (DDL) & Control (DCL)**

- **DDL:** `CREATE` (define structure), `ALTER` (modify structure), `DROP` (delete structure).
    
- **DCL:** `GRANT` (give access), `REVOKE` (remove access).
    
- **Constraints:** Primary Key (Unique + Not Null), Foreign Key (Referential Integrity), Check Constraints (Data ranges).
    

### Insights (Notes)

> [!NOTE] Storage vs. Structure
> 
> - **Metadata** describes structure while databases hold actual values.
>     
> - **File systems** inevitably lead to data isolation chaos.
>     

### Code / SQL Examples

**Creating a Table with Constraints:**

SQL

```
CREATE TABLE Employee (
     SSN INT PRIMARY KEY,
     Salary DECIMAL(10, 2),
     DNO INT,
     FOREIGN KEY (DNO) REFERENCES Department(DNumber)
);
```

**Altering Structure:**

SQL

```
ALTER TABLE students ADD postal_code number;
```

### Real-Life Case Scenario

- **Integrity:** You cannot delete a `Department` record if child `Employee` records still reference it (Referential Integrity).
    
- **Validation:** Using a Check Constraint to ensure a `Salary` is always between 1000 and 12000.
    

---

# Chapter 5: Data Manipulation (DML)

### Purpose

To modify, add, or remove existing records in the database.

### Key Concept

**The "CRUD" Operations**

- **UPDATE:** Modifies data. Crucial to use a `WHERE` clause.
    
- **INSERT:** Adds new data. Can be full-column or specific-column.
    
- **DELETE vs. TRUNCATE:** `DELETE` logs every row removal and can be filtered; `TRUNCATE` resets storage instantly and cannot be rolled back.
    

### Insights (Notes)

> [!WARNING] Operational Risks
> 
> - **Update without condition** modifies every single table record.
>     
> - **Truncate** resets storage instantly while **Delete** logs everything.
>     

### Code / SQL Examples

**Updating with vs. without condition:**

SQL

```
-- Updates ONE employee
UPDATE employee SET salary = 1200 WHERE SSN = 102661;

-- DANGEROUS: Updates ALL employees
UPDATE employee SET salary = 1200;
```

### Real-Life Case Scenario

- **Targeted Update:** Changing the salary and department specifically for employee SSN `102674`.
    
- **Bulk Removal:** Using `TRUNCATE` to wipe a temporary table instantly versus using `DELETE` which takes longer due to logging.
    

---

# Chapter 6: Data Retrieval & Joins (DQL)

### Purpose

To retrieve, filter, sort, and combine data from multiple tables.

### Key Concept

**Querying Logic**

- **Filtering:** `WHERE` (rows), `HAVING` (groups/aggregates), `LIKE` (patterns), `IN` (lists).
    
- **Aggregates:** `MAX`, `MIN`, `COUNT`, `AVG`.
    
- **Joins:**
    
    - _Inner:_ Only matches.
        
    - _Outer (Left/Right/Full):_ Includes non-matches.
        
    - _Self Join:_ Recursive relationship (requires aliases).
        

### Insights (Notes)

> [!INFO] Query Optimization
> 
> - **Aggregate functions** calculate data while ignoring null values.
>     
> - **Where** filters rows; **Having** filters aggregated group data.
>     
> - **Self joins** require table aliases to prevent ambiguity.
>     
> - **Inner joins** exclude records with no matching values.
>     

### Code / SQL Examples

**Aggregation with Filter:**

SQL

```
SELECT dno, MAX(salary)
FROM employee
GROUP BY dno
HAVING MAX(salary) > 1800;
```

**Self Join (Supervisor logic):**

SQL

```
SELECT e.Fname as Employee, s.Fname as Supervisor
FROM employee e, employee s
WHERE e.superssn = s.ssn;
```

### Real-Life Case Scenario

- **Pattern Matching:** Finding an employee whose name has 'o' as the second letter using `LIKE '?o*'`.
    
- **Recursive Data:** Listing an employee alongside their supervisor's name, even though both exist in the same `Employee` table.
    

---

# Chapter 7: Normalization & Optimization

### Purpose

To certify design health (Normalization) and speed up performance (Optimization).

### Key Concept

**Refining the Design**

- **Normalization:**
    
    - _1NF:_ No repeating groups/multivalued attributes/Composite.
        
    - _2NF:_ No partial dependencies (attribute depends on whole PK).
        
    - _3NF:_ No transitive dependencies (attribute depends on non-key attribute).
        
- **Optimization Objects:**
    
    - _Indexes:_ Pointers to speed up reading.
        
    - _Views:_ Logical windows/saved queries.
        

### Insights (Notes)

> [!TIP] Performance Trade-offs
> 
> - **Normalization tests** certify database design goodness and health.
>     
> - **Third Normal Form** eliminates indirect, transitive data dependencies.
>     
> - **Indexes** speed up reading but slow down writing (overhead on insert/update).
>     
> - **Views** are logical windows holding no actual data.
>     

### Code / SQL Examples

**Creating an Index:**

SQL

```
CREATE INDEX index_name ON table_name (column_name);
```

**Creating a View:**

SQL

```
CREATE VIEW view_name AS
SELECT columns FROM tables WHERE condition;
```

### Real-Life Case Scenario

- **Normalization (3NF):** Moving `City` to a separate table if it depends on `ZipCode`, rather than leaving it in a table where it only indirectly depends on the user ID.
    
- **Views:** Creating a view to restrict access so a user can see employee data but _not_ their sensitive salary info.

package isans.hackathon.rbc.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data               // Generates Getters, Setters, toString, hashCode, equals methods
@NoArgsConstructor  // Generates default constructor
@AllArgsConstructor // Generates a constructor with all fields
@Table(name = "Employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;

    private String firstName;
    private String lastName;
    private String authorization;
}
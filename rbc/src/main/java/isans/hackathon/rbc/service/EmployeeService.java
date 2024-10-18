package isans.hackathon.rbc.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import isans.hackathon.rbc.entity.Employee;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class EmployeeService {

    private static final String COLLECTION_NAME = "employees";

    public String saveEmployee(Employee employee) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        String documentId = String.valueOf(employee.getEmployeeId());
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection(COLLECTION_NAME).document(documentId).set(employee);
        return collectionApiFuture.get().getUpdateTime().toString();
    }

    public String updateAuthorization(Long employeeId, String newAuthorization) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();

        // Convert employeeId to String for the document ID
        String documentId = String.valueOf(employeeId);

        // Fetch the existing employee document
        ApiFuture<DocumentSnapshot> query = dbFirestore.collection(COLLECTION_NAME).document(documentId).get();
        DocumentSnapshot document = query.get();

        if (document.exists()) {
            // Update the authorization field
            Employee employee = document.toObject(Employee.class);
            employee.setAuthorization(newAuthorization);

            // Save the updated employee document back to Firestore
            ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection(COLLECTION_NAME).document(documentId).set(employee);
            return collectionApiFuture.get().getUpdateTime().toString();
        } else {
            throw new RuntimeException("Employee with ID " + employeeId + " not found.");
        }
    }
}

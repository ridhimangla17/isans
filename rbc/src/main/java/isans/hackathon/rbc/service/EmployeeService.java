package isans.hackathon.rbc.service;
import com.google.cloud.firestore.*;
import isans.hackathon.rbc.entity.Employee;
import com.google.api.core.ApiFuture;
import com.google.firebase.cloud.FirestoreClient;
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

        String documentId = String.valueOf(employeeId);

        ApiFuture<DocumentSnapshot> query = dbFirestore.collection(COLLECTION_NAME).document(documentId).get();
        DocumentSnapshot document = query.get();

        if (document.exists()) {
            // Fetch existing employee object
            Employee employee = document.toObject(Employee.class);

            // Ensure employee object is not null
            assert employee != null;

            // Update the authorization field
            employee.setAuthorization(newAuthorization);

            // Save the updated employee object back to Firestore
            ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection(COLLECTION_NAME).document(documentId).set(employee);
            return collectionApiFuture.get().getUpdateTime().toString();
        } else {
            throw new RuntimeException("Employee with ID " + employeeId + " not found.");
        }
    }
}

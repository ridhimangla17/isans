package isans.hackathon.rbc.service;
import com.google.cloud.firestore.*;
import isans.hackathon.rbc.entity.Employee;
import com.google.api.core.ApiFuture;
import com.google.firebase.cloud.FirestoreClient;
import isans.hackathon.rbc.entity.Program;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class ProgramService {
    private static final String COLLECTION_NAME = "programs";

    public String saveProgram(Program program) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        String documentId = String.valueOf(program.getProgram_id());
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection(COLLECTION_NAME).document(documentId).set(program);
        return collectionApiFuture.get().getUpdateTime().toString();
    }
}

package isans.hackathon.rbc.controller;

import isans.hackathon.rbc.entity.Program;
import isans.hackathon.rbc.service.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProgramController {
    @Autowired
    private ProgramService programService;

    @PostMapping("/programs")
    public String saveProgram(@RequestBody Program program) throws ExecutionException, InterruptedException {
        return programService.saveProgram(program);
    }
    @GetMapping("/programList")
    public List<Program> allProgram() throws ExecutionException, InterruptedException {
        return programService.allPrograms();
    }
}
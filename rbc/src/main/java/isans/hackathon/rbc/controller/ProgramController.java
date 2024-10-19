package isans.hackathon.rbc.controller;

import isans.hackathon.rbc.entity.Program;
import isans.hackathon.rbc.service.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class ProgramController {
    @Autowired
    private ProgramService programService;

    @PostMapping("/programs")
    public String saveProgram(@RequestBody Program program) throws ExecutionException, InterruptedException {
        return programService.saveProgram(program);
    }
}
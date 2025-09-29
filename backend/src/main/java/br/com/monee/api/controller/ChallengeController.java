package br.com.monee.api.controller;

import br.com.monee.api.domain.challenge.ChallengeRequestDTO;
import br.com.monee.api.domain.challenge.ChallengeResponseDTO;
import br.com.monee.api.service.ChallengeService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/challenges")
public class ChallengeController {
    private final ChallengeService challengeService;

    public ChallengeController(ChallengeService challengeService) {
        this.challengeService = challengeService;
    }

    @PostMapping("/{userId}")
    public ResponseEntity<ChallengeResponseDTO> save(@PathVariable UUID userId, @RequestBody @Valid ChallengeRequestDTO challengeRequestDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.challengeService.save(userId, challengeRequestDTO));
    }
}

(define (filter predicate sequence)
  (cond ((null? sequence) (list ))
        ((predicate (car sequence))
         (cons (car sequence)
               (filter predicate (cdr sequence))))
        (else (filter predicate (cdr sequence)))))
(define (accumulate op initial sequence)
  (if (null? sequence)
      initial
  (op (car sequence) (accumulate op initial (cdr sequence)))
  ))
(define (fold-left op initial seq)
  (define (iter result rest)
    (if (null? rest)
        result
        (iter (op result (car rest))
              (cdr rest))))
  (iter initial seq))
(define (fold-right op initial seq)
  (define (iter result rest)
    (if (null? rest)
        result
        (iter (op (car rest) result)
              (cdr rest))))
  (iter initial seq))
(define (reverse-l sequence)
  (fold-left (lambda (x y)
                (cons y x) )
              (list )
              sequence))
(define (reverse-r sequence)
  (fold-right (lambda (x y)
                (cons x y) )
              (list )
              sequence))

;Test
(display "Practice 2.38")
(newline)
(fold-left / 1 (list 1 2 3))
(fold-right / 1 (list 1 2 3))
(fold-left list (list ) (list 1 2 3))
(fold-right list (list ) (list 1 2 3))
(display "Practice 2.39")
(newline)
(reverse-l (list 1 2 (list 3 4)))
(reverse-r (list 1 2 (list 3 4)))
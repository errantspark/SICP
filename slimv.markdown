## Useful Ones
,d eval defun, evals whatever you're currently in all the way to the top
,e evals whatever you're over (shift is prettyprint)
D deletes until end of line
C same but insert
( and ) move around matched parens, and ) works even in insert mode
BS and Del also work to move around parens
x and X also do the same thing
[[ and ]] jump between defuns
,< and ,> move parens around
,J and ,O join and split (open) lists e.g. (a b) -> (a) (b) and inverse
,S splice current s-exp into containing s-exp e.g. (a (b) c) -> (a b c)
,W wraps current symbol with parens
dab and dib delete with and without parens, ( also works instead of b
yab and yib same but with yank


-----
,  Slimv Menu
,)  Toggle annoying peren bullshit

,d  Eval Defun
,e  Eval Last Expression
,E  Pprint Eval Last Expression
,r  Eval Region
,b  Eval Buffer
,v  Interactive Eval
,u  Undefine Function

,1  Macroexpand-1
,m  Macroexpand
,t  Trace
,T  Untrace
,l  Disassemble
,i  Inspect

,D  Compile Defun
,L  Compile and Load File
,F  Compile File
,R  Compile Region

,p  Profile
,P  Unprofile

,s  Describe Symbol
,h  Get Hyperspec
,a  Apropos

,S  Connect to Server
,z  Refresh REPL Buffer
,Z  Refresh REPL Now 

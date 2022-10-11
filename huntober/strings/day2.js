let myStr = `af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S`
let funStr = 'e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs'
//console.log(myStr)
// let myC = myStr.indexOf('c')
// //console.log(myC)

// myStr = myStr.slice(myC + 1)
// //console.log("myStr: ", myStr)

// myStr = myStr.split('Eek!')
// myStr = myStr.join('')
// myStr = myStr.split('').reverse().join('')

// //console.log(' f i n a l  s t r i n g ', myStr)

// myStr = myStr.split('v')
// for (let i = 0; i < myStr.length; i++){
//   console.log(myStr[i][0])
// }


const mess = str => {
    let result = []
    // find the index of 'c'
    let ind = str.indexOf('c')
    // only keep everything after 'c'
    console.log('index:  ', ind)
    str = str.slice(ind + 1)
    console.log(' str after slice  : ', str)
    // split by 'Eek'
    str = str.split('Eek!')
    //Join it
    console.log(' str after eek  : ', str)
    str = str.join('')
    //reverse it
    str = str.split('').reverse().join('')
    console.log(' str after reverse  :', str)
    //split by 'v'
    str = str.split('v')
    console.log(' str after v  : ', str)
    for (let i = 0; i < str.length; i++){
        result.push(str[i][0])
    }
    console.log(result)
    return result;

}

mess(myStr)
mess(funStr)



/*
'S'
'S'
'p'
'a'
'c'
'e'
*/
/*
P A big string, to be sliced up to and including firs c. 
remove all instances of 'Eek!'
reverse 
read the reversed sentence. 
R a stentence w/o eek or what's before c. and reversed
E # a message #
P slice or splice up to c
'separate by 'EEK and then join
reverse
"Split this string up on *lowercase* 'V'. The first character in each substring besides this first one is what you need to remember for tomorrow's task.
*/




'use client'

function recurse(n:number) {
  console.log('')
  console.log("start", n);

  if (n > 0) {
    recurse(n - 1);
  }

  console.log("end", n);
  console.log('')
}

recurse(7)

export function ForTestOnly(){



    return(
        <div>

        </div>
    )
}

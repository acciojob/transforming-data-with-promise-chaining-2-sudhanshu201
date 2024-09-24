//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
    // Get the value from the input and convert it to a number
    let val = Number(document.getElementById("ip").value);
        
    // Promise that resolves after 2 seconds with the number from input
    function print(number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number);
            }, 2000);
        });
    }

    // Start the chain of promises
    print(val)
        .then((res) => {
            document.getElementById("output").innerHTML = `Result: ${res}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(res * 2); // Multiply by 2
                }, 1000);
            });
        })
        .then((res) => {
            document.getElementById("output").innerHTML = `Result: ${res}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(res - 3); // Subtract 3
                }, 1000);
            });
        })
        .then((res) => {
            document.getElementById("output").innerHTML = `Result: ${res}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(res / 2); // Divide by 2
                }, 1000);
            });
        })
        .then((res) => {
            document.getElementById("output").innerHTML = `Result: ${res}`;
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(res + 10); // Add 10
                }, 1000);
            });
        })
        .then((finalRes) => {
            document.getElementById("output").innerHTML = `Final Result: ${finalRes}`;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
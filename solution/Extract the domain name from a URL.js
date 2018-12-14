// (5kyu) Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

const domainName = url => {
  console.log("​url", url);
  if (/www/.test(url)) {
    return url.split(".")[1].split("/")[0];
  } else {
    return url.includes("//")
      ? url.split(".")[0].split("//")[1]
      : url.split(".")[0];
  }
};

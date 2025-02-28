const urlParams = new URLSearchParams(window.location.search);

const value = urlParams.get('ID');
const devMode = urlParams.get('DevMode');

if (value !== null) {
  console.log(`ILZ Console: Recieved Document ${value}`);
  document.getElementById('DocumentBox').innerHTML=`<iframe style='border-color:transparent' src='/Docs/Pages/${value}.html' class='mdui-col-xs-12' height='80%'></iframe>`;
} else {
  console.error("ILZ Console: Empty Document ID");
}

if (devMode !== null)
{
    console.warn(`ILZ Console: DevMode Access`);
    document.getElementById('DevMode').checked = true;
} else {
    console.log("ILZ Console: Normal Access");
}

function DocumentRedirect(DocID)
{
    var urlText = `https://${window.location.host}/Docs/View/`;
    if (document.getElementById('DevMode').checked)
    {
        urlText += 'index.html';
    }


    const url = new URL(urlText);
    url.searchParams.set('ID', DocID);

    if (document.getElementById('DevMode').checked) url.searchParams.set('DevMode', '');

    window.location.href=url.toString();

    console.log(window.location.href);

    document.getElementsByClassName('mdui-list-item-active')[0].classList.remove('mdui-list-item-active');
    document.getElementById(`ILD-${DocID}`).classList.add('mdui-list-item-active');
}

function UpdateDevMode()
{
    const url = new URL(window.location.href);

    if (document.getElementById('DevMode').checked)
    {
        url.searchParams.set('DevMode', '');
    }
    else
    {
        url.searchParams.delete('DevMode');
    }

    window.location.replace(url.toString());
}
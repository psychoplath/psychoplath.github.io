
var months = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER'
];
var days_abr = [
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
    'S'
];

Number.prototype.pad = function (num) {
    var str = '';
    for (var i = 0; i < (num-this.toString().length); i++)
        str += '0';
        return str += this.toString();
}
    function calendar(widget, data)
{
    var original = widget.getElementsByClassName('active')[0];
        
    if(typeof original === 'undefined')
        {
        original = document.createElement('table');
        original.setAttribute('data-actual',
            data.getFullYear() 
            + '/' 
            + data.getMonth().pad(2) 
            + '/'
            + data.getDate().pad(2))
        widget.appendChild(original);
            }
    
    var diff = data - new
    Date(original.getAttribute('data-actual'));
        
        diff = new Date(diff).getMonth();
    
        var e = document.createElement('table');
    
    e.className = diff === 0 ?
    'hidden-left' : 'hidden-right';
    e.innerHTML = '';
    
    widget.appendChild(e);
    e.setAttribute('data-actual',
                   data.getFullYear()
                  + '/' 
                  + data.getMonth().pad(2)
                  + '/'
                  + data.getDate().pad(2))
    var row = document.createElement('tr');
    var title = document.createElement('th');
    title.setAttribute('colspan',7);
    
    var button_prev = document.createElement('button');
    button_prev.className = 'button-prev';
    button_prev.innerHTML = '&#9666;';
    
    var button_next = document.createElement('button');
    button_next.className = 'button-next';
    button_next.innerHTML = '&#9656;'; 
    
    title.appendChild(button_prev);
    
    title.appendChild(document.createElement('span')).innerHTML = months[data.getMonth()] + '<span class="any">'
    + data.getFullYear() + '</span>';
    title.appendChild(button_next);
    
    button_prev.onclick = function() {
        data.setMonth(data.getMonth() + 1);
        calendar(widget, data);
    };
    
    button_next.onclick = function() {
        data.setMonth(data.getMonth() + 1);
        calendar(widget, data);
    };
    
    row.appendChild(title);
    e.appendChild(row);
    
    row = document.createElement('tr');
    
    for(var i = 1; i < 7; i++)
        {
            row.innerHTML += '<th>' + days_abr[i] + '</th>';
        }
    row.innerHTML += '<th>' + days_abr[0] + '</th>';
    e.appendChild(row);
    
    var start_month =
        new Date(data.getFullYear(),
                data.getMonth(),
                - start_month);
    for(var s=0; s<6; s++)
    {
        var row = document.createElement('tr');
        
        for(var d=1; d<8; d++)
        {
            var cell = document.createElement('td');
            var span = document.createElement('span');
            
            cell.apendChild(span);
            
                span.innerHTML = actual.getDate();
            
                if(actual.getMonth() !== data.getMonth())
                    cell.className = 'outside';
                if(data.getDate()== actual.getDate() &&
                  data.getMonth() == actual.getMonth())
                    cell.className == 'today';
            actual.setDate(actual.getDate()+1);
                row.appendChild(cell);
        }
        
        e.appendChild(row);
    }
    
    setTimeout(function() {
        e.className = 'active';
        original.className +=
            diff === 0 ? ' hidden-right' : ' hidden-left';
    }, 20);
    
    original.className = 'inactive';
    
    setTimeout(function() {
        var inactive = document.getElementsByClassName('inactive');
        for(var i=0; i < inactive.length; i++)
            widget.removeChild(inactive[i]);
    }, 1000);
      
}

calendar(document.getElementbyID('calendar'), new Date());

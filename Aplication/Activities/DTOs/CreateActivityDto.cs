using System.ComponentModel.DataAnnotations;

namespace Aplication.Activities.DTOs;

public class CreateActivityDto
{
    public string Title { get; set; } = String.Empty;
    
    public string Description { get; set; }  = String.Empty;
    
    
    public DateTime Date { get; set; }
    
    public string Category { get; set; }  = String.Empty;

    // Location properties
    public string City { get; set; }  = String.Empty;
    
    public string Venue { get; set; }   = String.Empty; 
    
    public double Latitude { get; set; }  
    
    public double Longitude { get; set; } 
}